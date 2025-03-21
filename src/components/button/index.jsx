import { createElement } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

export default function Button({ children, size = "normal", className, onClick, onMouseEnter, onMouseLeave }) {
  return createElement("button", {
    className: classNames("rounded-full text-[color:var(--color-base)] flex items-center justify-center font-bold hover:bg-[color:var(--color-primary)]/80 transition-colors", {
        "px-4 h-9": size === "normal",
        "px-6 text-[17px] h-[52px] w-full": size === "large",
    }, className),
    onClick,
    onMouseEnter,
    onMouseLeave
  }, children)
}

Button.propTypes = {
    size: PropTypes.oneOf(["normal", "large"]),
    className: PropTypes.string,
    onClick: PropTypes.func,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func
}

Button.defaultProps = {
    size: "normal"
}
