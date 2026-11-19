import { FaShieldAlt, FaPhoneAlt } from "react-icons/fa";

const trustItems = [
  { label: "Evidence-Based", Icon: FaShieldAlt },
];

export function TopBar() {
  return (
    <div className="hidden md:block w-full bg-primary-dark text-white border-b border-white/8">
      <div className="container-px mx-auto max-w-7xl h-9 flex items-center justify-between text-[11px]">
        <ul className="flex items-center gap-5">
          {trustItems.map(({ label, Icon }) => (
            <li key={label} className="flex items-center gap-2 text-white/80">
              <Icon className="size-3 text-primary-light" />
              <span className="font-medium tracking-wide">{label}</span>
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
