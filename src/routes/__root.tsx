import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  useRouterState,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import logoAsset from "@/assets/agridevcor-logo.png.asset.json";
import { reportLovableError } from "../lib/lovable-error-reporting";
import ScrollHint from "@/components/home/ScrollIndicator";
import ChatAssistant from "@/components/chat/ChatAssistant";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/motion/PageTransition";
import { Toaster } from "@/components/ui/sonner";

/* -------------------- NOT FOUND -------------------- */

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">
          Page not found
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

/* -------------------- ERROR -------------------- */

function ErrorComponent({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();

  useEffect(() => {
    reportLovableError(error, {
      boundary: "tanstack_root_error_component",
    });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong. Try again or go home.
        </p>

        <div className="mt-6 flex gap-2 justify-center">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90"
          >
            Try again
          </button>

          <a
            href="/"
            className="rounded-md border px-4 py-2 text-sm hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

/* -------------------- ROUTE -------------------- */

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        title: "AgriDevcor — Agricultural Development & Sustainability",
      },
      {
        name: "description",
        content:
          "Premium agricultural consulting in climate-smart farming, irrigation, agribusiness and rural development across Africa.",
      },
      { property: "og:site_name", content: "AgriDevcor" },
      { property: "og:type", content: "website" },
      {
        property: "og:title",
        content: "AgriDevcor — Agricultural Development & Sustainability",
      },
      {
        property: "og:description",
        content:
          "Premium agricultural consulting in climate-smart farming, irrigation, agribusiness and rural development across Africa.",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#166534" },
    ],
    links: [
      { rel: "icon", type: "image/png", href: logoAsset.url },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Manrope:wght@500;600;700;800&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "AgriDevcor",
          url: "https://agridevcor.com",
          logo: logoAsset.url,
          description:
            "Agricultural development and sustainability consulting across Africa.",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Harare",
            addressCountry: "ZW",
          },
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+263-242-257156",
            contactType: "customer service",
            email: "info@agridevcor.com",
          },
        }),
      },
    ],
  }),

  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

/* -------------------- SHELL -------------------- */

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

/* -------------------- ROOT COMPONENT -------------------- */

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  const pathname = useRouterState({
    select: (s) => s.location.pathname,

  });

  const isHomePage = pathname === "/";
  
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />

      {/* ✅ GLOBAL SCROLL UI (NOW WORKS ON ALL PAGES) */}
      <ScrollHint />

      <main
        id="main"
        className={isHomePage ? "" : "pt-[76px] md:pt-[84px]"}
      >
        <PageTransition>
          <Outlet />
        </PageTransition>
      </main>

      <Footer />

      {/* GLOBAL CHAT */}
      <ChatAssistant />

      <Toaster richColors position="top-right" />
    </QueryClientProvider>
  );
}