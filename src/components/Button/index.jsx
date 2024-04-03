import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[10px]",
};
const variants = {
  fill: {
    deep_purple_600: "bg-deep_purple-600 shadow-md text-gray-50",
    deep_purple_50: "bg-deep_purple-50",
    orange_300: "bg-orange-300 text-gray-900_02",
    gray_100: "bg-gray-100 shadow-sm text-deep_purple-600",
  },
};
const sizes = {
  lg: "h-[64px] px-[17px]",
  xs: "h-[36px] px-[18px] text-sm",
  sm: "h-[44px] px-[35px] text-lg",
  xl: "h-[70px] px-[35px] text-2xl",
  md: "h-[59px] px-[30px] text-lg",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "md",
  color = "deep_purple_600",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["lg", "xs", "sm", "xl", "md"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["deep_purple_600", "deep_purple_50", "orange_300", "gray_100"]),
};

export { Button };
