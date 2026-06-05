import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";

const socials = [
  { href: "https://facebook.com/", label: "Facebook", Icon: FaFacebookF },
  { href: "https://instagram.com/", label: "Instagram", Icon: FaInstagram },
  { href: "https://linkedin.com/", label: "LinkedIn", Icon: FaLinkedinIn },
];

export function TopBar() {
  return (
    <div className="hidden md:block bg-primary-dark text-primary-foreground text-xs">
      <div className="container-px mx-auto max-w-7xl h-10 flex items-center justify-between">
        <ul className="flex items-center gap-1">
          {socials.map(({ href, label, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="inline-flex items-center justify-center size-7 rounded-full text-white/85 hover:text-white hover:bg-white/15 transition-colors"
              >
                <Icon className="size-3.5" />
              </a>
            </li>
          ))}
        </ul>
        <a
          href="tel:+263242257156"
          className="inline-flex items-center gap-2 text-white/85 hover:text-white transition-colors font-medium"
        >
          <FaPhoneAlt className="size-3" />
          <span className="hidden lg:inline">Have any query? Call us</span>
          <span className="font-semibold tracking-wide">+263 (0) 242-257156 / 257157</span>
        </a>
      </div>
    </div>
  );
}
