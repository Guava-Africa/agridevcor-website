import { useId, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FloatingInputProps {
  label: string;
  name: string;
  type?: string;
  error?: string;
  className?: string;
  required?: boolean;
  as?: "input" | "textarea";
  rows?: number;
}

export function FloatingInput({
  label,
  name,
  type = "text",
  error,
  className,
  required,
  as = "input",
  rows = 5,
}: FloatingInputProps) {
  const id = useId();
  const [focused, setFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  const active = focused || hasValue;

  const sharedProps = {
    id,
    name,
    required,
    "aria-invalid": !!error,
    "aria-describedby": error ? `${id}-error` : undefined,
    onFocus: () => setFocused(true),
    onBlur: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFocused(false);
      setHasValue(e.currentTarget.value.length > 0);
    },
    className: cn(
      "peer w-full rounded-xl border bg-background/80 px-4 pt-6 pb-2 text-sm backdrop-blur-sm transition-all duration-300",
      "focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary",
      error ? "border-destructive" : "border-border hover:border-primary/30",
      as === "textarea" && "resize-none",
    ),
  };

  return (
    <div className={cn("relative", className)}>
      <motion.label
        htmlFor={id}
        animate={{
          y: active ? -8 : 0,
          scale: active ? 0.85 : 1,
          color: active ? "var(--color-primary)" : "var(--color-muted-foreground)",
        }}
        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute left-4 top-4 origin-left text-sm font-medium"
      >
        {label}
      </motion.label>

      {as === "textarea" ? (
        <textarea {...sharedProps} rows={rows} />
      ) : (
        <input {...sharedProps} type={type} />
      )}

      {error && (
        <motion.p
          id={`${id}-error`}
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-1.5 text-xs text-destructive"
          role="alert"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
}
