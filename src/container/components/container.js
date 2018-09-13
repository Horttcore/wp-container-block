/**
 * Container wrapper
 */

// Setup the block
const { Component } = wp.element;

// Import block dependencies and components
import classnames from "classnames";

/**
 * Create a Button wrapper Component
 */
export default class Container extends Component {
  constructor(props) {
    super(...arguments);
  }

  render() {
    // Setup the attributes
    const {
      attributes: {
        backgroundColor,
        backgroundImage,
        backgroundRepeat,
        backgroundSize,
        fontColor,
        layout,
        margin,
        padding,
      }
    } = this.props;

    return (
      <div
        style={{
          backgroundColor: backgroundColor,
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: backgroundRepeat,
          backgroundSize: backgroundSize,
          color: fontColor,
          margin: margin,
          padding: padding,
        }}
        className={classnames(
          this.props.className,
          "container__outer",
          `container__outer--${layout}`
        )}
      >
        <div class="container__inner">
            {this.props.children}
        </div>
      </div>
    );
  }
}
