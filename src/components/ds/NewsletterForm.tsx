import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface NewsletterFormProps {
  variant?: "dark" | "light";
  className?: string;
}

export function NewsletterForm({ variant = "dark", className }: NewsletterFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 900));
    setStatus("success");
    setEmail("");
    setTimeout(() => setStatus("idle"), 4000);
  }

  const isDark = variant === "dark";

  return (
    <form onSubmit={handleSubmit} className={cn("space-y-3", className)} noValidate>
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className={cn(
              "flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium",
              isDark ? "bg-primary/20 text-primary-light" : "bg-soft text-primary",
            )}
          >
            <CheckCircle2 className="size-5 shrink-0" />
            You&apos;re subscribed. Welcome aboard!
          </motion.div>
        ) : (
          <motion.div key="form" initial={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className={cn(
                "w-full rounded-xl border px-4 py-3 text-sm backdrop-blur-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/40",
                isDark
                  ? "border-white/10 bg-white/5 text-white placeholder:text-white/35 focus:border-primary-light"
                  : "border-border bg-background text-foreground placeholder:text-muted-foreground focus:border-primary",
              )}
            />
            <motion.button
              type="submit"
              disabled={status === "loading"}
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className={cn(
                "mt-3 w-full rounded-xl py-3 text-sm font-semibold transition-shadow hover:shadow-lg disabled:opacity-70",
                isDark
                  ? "bg-accent text-accent-foreground"
                  : "bg-primary text-primary-foreground hover:bg-primary-dark",
              )}
            >
              {status === "loading" ? (
                <span className="inline-flex items-center gap-2">
                  <Loader2 className="size-4 animate-spin" />
                  Subscribing…
                </span>
              ) : (
                "Subscribe"
              )}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}
