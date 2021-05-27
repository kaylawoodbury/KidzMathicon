import React from "react";
import { ButtonProps } from "./button.props";

class Button extends React.Component<ButtonProps, {}> {
  render() {
    const { text, children } = this.props;

    // const content = ( children || <p>{text}</p>);

    return (
      <div>
        <button className="Button">{text}</button>
      </div>
    );
  }
}
export default Button;
