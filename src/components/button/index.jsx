import { createElement } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

export default function Button({ children, size = "normal", className }) {
  return createElement("button", {
    className: classNames("rounded-full text-black flex items-center justify-center font-bold hover:bg-[#e1e8ed] transition-colors", {
        "px-4 h-9": size === "normal",
        "px-6 text-[17px] h-[52px] w-full": size === "large",
    }, className),
  }, children)
}

Button.propTypes = {
    size: PropTypes.oneOf(["normal", "large"]),
    className: PropTypes.string
}

Button.defaultProps = {
    size: "normal"
}
