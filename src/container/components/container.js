/**
 * Container wrapper
 */
const { Component } = wp.element;

/**
 * Create a Button wrapper Component
 */
export default class Container extends Component {
    constructor(props) {
        super(...arguments);
    }

    render() {

        const {
            attributes: {
                backgroundColor,
                backgroundImage,
                backgroundAttachment,
                backgroundRepeat,
                backgroundPosition,
                backgroundSize,
                color,
                margin,
                padding,
            }
        } = this.props;

        const clean = function(obj)  {
            for (var propName in obj) { 
                if (!obj[propName]) {
                    delete obj[propName];
                }
            }
            return obj;
        }

        const style = {
            backgroundColor,
            backgroundImage: `url(${backgroundImage})`,
            backgroundAttachment: backgroundAttachment ? 'fixed' : '',
            backgroundRepeat: !backgroundRepeat ? 'no-repeat' : '',
            backgroundPosition,
            backgroundSize,
            color,
            margin,
            padding,
        };

        return (
            <div
                style={clean(style)}
                className={this.props.className}
            >
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}
