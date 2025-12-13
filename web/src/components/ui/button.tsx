import { ButtonHTMLAttributes, forwardRef } from "react";
import clsx from "clsx";

const baseClasses =
  "inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-60";

const Button = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>(
  function Button({ className, ...props }, ref) {
    return <button ref={ref} className={clsx(baseClasses, className)} {...props} />;
  }
);

export { Button };
