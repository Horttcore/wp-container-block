
// Import block dependencies and components
import BlockControls from "./block-controls";
import InspectorControls from "./inspector-controls";
import Container from "./container";

// Components
const { Component } = wp.element;
const { InnerBlocks } = wp.blockEditor;

export default class Edit extends Component {

    constructor(props) {
        super(...arguments);
    }

    render() {
        const onSelectImage = img => {
            this.props.setAttributes({
                backgroundImageID: img.id,
                backgroundImage: img.url
            });
        };

        const onRemoveImage = () => {
            this.props.setAttributes({
                backgroundImageID: null,
                backgroundImage: null
            });
        };

        return [
            <BlockControls { ...{ ...this.props, onRemoveImage, onSelectImage}} />,
            <InspectorControls {...{ ...this.props, onRemoveImage, onSelectImage }} />,
            <Container {...this.props}>
                <InnerBlocks />
            </Container>
        ];
    }
}