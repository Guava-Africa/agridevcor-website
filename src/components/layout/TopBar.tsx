import { FaShieldAlt, FaHeadset, FaChartLine, FaPhoneAlt } from "react-icons/fa";

const trustItems = [
  { label: "Verified Users", Icon: FaShieldAlt },
  { label: "24/7 Support", Icon: FaHeadset },
  { label: "Growing Daily", Icon: FaChartLine, special: true },
];

export function TopBar() {
  return (
    <div
      className="
        hidden md:block
        w-full
        bg-[var(--color-primary)]
        text-white
        border-b
        border-white/10
      "
    >
      <div className="container-px mx-auto max-w-7xl h-10 flex items-center justify-between text-xs">

        {/* LEFT SIDE */}

        <ul className="flex items-center gap-5">
          {trustItems.map(({ label, Icon, special }) => (
            <li
              key={label}
              className="flex items-center gap-2 text-white/90"
            >
              <Icon className="size-3.5" />

              {!special && (
                <span className="font-medium tracking-wide">
                  {label}
                </span>
              )}

              {special && (
                <span className="flex items-center gap-2 px-2 py-0.5 rounded-full bg-white/10">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75"></span>

                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
                  </span>

                  <span className="font-medium tracking-wide">
                    {label}
                  </span>
                </span>
              )}
            </li>
          ))}
        </ul>

        {/* RIGHT SIDE */}

        <a
          href="tel:+263242257156"
          className="
            inline-flex
            items-center
            gap-2
            text-white/90
            hover:text-white
            transition-colors
            font-medium
          "
        >
          <FaPhoneAlt className="size-3" />

          <span className="hidden lg:inline">
            Need help?
          </span>

          <span className="font-semibold tracking-wide">
            +263 (0) 242-257156 / 257157
          </span>
        </a>

      </div>
    </div>
  );
}