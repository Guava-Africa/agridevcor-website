import { FaShieldAlt, FaHeadset, FaGlobeAfrica, FaPhoneAlt } from "react-icons/fa";

const trustItems = [
  { label: "Evidence-Based", Icon: FaShieldAlt },
  { label: "24/7 Support", Icon: FaHeadset },
  { label: "12+ African Countries", Icon: FaGlobeAfrica, special: true },
];

export function TopBar() {
  return (
    <div className="hidden md:block w-full bg-primary-dark text-white border-b border-white/8">
      <div className="container-px mx-auto max-w-7xl h-9 flex items-center justify-between text-[11px]">
        <ul className="flex items-center gap-5">
          {trustItems.map(({ label, Icon, special }) => (
            <li key={label} className="flex items-center gap-2 text-white/80">
              <Icon className="size-3 text-primary-light" />
              {special ? (
                <span className="flex items-center gap-2 px-2 py-0.5 rounded-full bg-white/8">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-light opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary-light" />
                  </span>
                  <span className="font-medium tracking-wide">{label}</span>
                </span>
              ) : (
                <span className="font-medium tracking-wide">{label}</span>
              )}
            </li>
          ))}
        </ul>

        <a
          href="tel:+263242257156"
          className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors font-medium"
        >
          <FaPhoneAlt className="size-2.5" />
          <span className="hidden lg:inline text-white/60">Need help?</span>
          <span className="font-semibold">+263 (0) 242-257156</span>
        </a>
      </div>
    </div>
  );
}
