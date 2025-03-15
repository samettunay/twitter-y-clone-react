import { createElement } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

export default function Button({ children, size = "normal" }) {
  return createElement("button", {
    className: classNames("bg-[#eff3f4] rounded-full text-black flex items-center justify-center font-bold hover:bg-[#e1e8ed] transition-colors",
        {
            "px-4 h-9": size === "normal",
            "px-6 text-[17px] h-[52px] w-full": size === "large",
        }
    ),

  }, children)
}

Button.propTypes = {
    size: PropTypes.oneOf(["normal", "large"]),
}

Button.defaultProps = {
    size: "normal",
}
