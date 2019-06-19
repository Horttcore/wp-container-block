/**
 * Inspector Controls
 */

// Setup the block
const { __ } = wp.i18n;
const { Component } = wp.element;

// Import block components
const {
    InspectorControls,
    ColorPalette,
    MediaUpload,
    MediaUploadCheck
} = wp.blockEditor;

const {
    PanelBody,
    ToggleControl,
    TextControl,
    IconButton,
    ButtonGroup
 } = wp.components;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {
    constructor(props) {
        super(...arguments);
    }

    render() {

        const {
            onSelectImage,
            onRemoveImage,
            setAttributes,
            attributes: {
                backgroundColor,
                backgroundImageID,
                backgroundPosition,
                backgroundSize,
                backgroundAttachment,
                backgroundRepeat,
                color,
                margin,
                padding
            }
        } = this.props;

        return (
            <InspectorControls key="inspector">

                <PanelBody title={__("Box Model", "wp-container-block")} initialOpen={true}>

                    <TextControl
                        label={__("Margin", "wp-container-block")}
                        value={margin}
                        onChange={margin => setAttributes({margin})}
                    />

                    <TextControl
                        label={__("Padding", "wp-container-block")}
                        value={padding}
                        onChange={padding => setAttributes({padding})}
                    />

                </PanelBody>

                <PanelBody title={__("Background", "wp-container-block")} initialOpen={false}>

                    <MediaUploadCheck>
                        <p>
                            <ButtonGroup className="wp-container-block__button-group">
                                <MediaUpload
                                    onSelect={onSelectImage}
                                    type="image"
                                    value={backgroundImageID}
                                    render={({ open }) => (
                                        <IconButton
                                            icon="format-image"
                                            onClick={open}
                                        >{ backgroundImageID ? __('Edit Image', "wp-container-block") : __('Add Image', "wp-container-block") }</IconButton>
                                    )}
                                />
                                <IconButton
                                    icon="no-alt"
                                    onClick={onRemoveImage}
                                >
                                    { __("Remove Image", "wp-container-block") }
                                </IconButton>
                            </ButtonGroup>
                        </p>
                    </MediaUploadCheck>

                    <TextControl
                        label={__("Size", "wp-container-block")}
                        value={backgroundSize}
                        onChange={backgroundSize => setAttributes({backgroundSize})}
                    />

                    <TextControl
                        label={__("Position", "wp-container-block")}
                        value={backgroundPosition}
                        onChange={backgroundPosition => setAttributes({backgroundPosition})}
                    />

                    <ToggleControl
                        label={__("Repeat background", "wp-container-block")}
                        checked={backgroundRepeat == 'repeat' ? true : false}
                        onChange={value => setAttributes({backgroundRepeat: value ? "repeat" : ""})}
                    />

                    <ToggleControl
                        label={__("Fixed background", "wp-container-block")}
                        checked={backgroundAttachment == 'fixed' ? true : false}
                        onChange={value => setAttributes({backgroundAttachment: value ? "fixed" : ""})}
                    />
                 
                    <ColorPalette
                        label={__("Background Color", "wp-container-block")}
                        value={backgroundColor}
                        onChange={backgroundColor => setAttributes({backgroundColor})}
                    />

                </PanelBody>

                <PanelBody title={__("Font", "wp-container-block")} initialOpen={false}>
                    <ColorPalette
                        label={__("Font Color", "wp-container-block")}
                        value={color}
                        onChange={color => setAttributes({color})}
                    />
                </PanelBody>

            </InspectorControls>
        );
    }
}
