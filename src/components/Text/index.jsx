import React from "react";

const sizes = {
  "5xl": "text-[40px] font-medium md:text-[38px] sm:text-4xl",
  xs: "text-[11px] font-normal",
  lg: "text-lg font-normal",
  s: "text-sm font-normal",
  "2xl": "text-[23px] font-medium md:text-[21px]",
  "3xl": "text-2xl font-normal md:text-[22px]",
  "4xl": "text-[38px] font-medium md:text-4xl sm:text-[34px]",
  xl: "text-xl font-medium",
  md: "text-base font-normal",
};

const Text = ({ children, className = "", as, size = "md", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-gray-700 font-poppins ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
