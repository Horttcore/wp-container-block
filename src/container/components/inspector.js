/**
 * Inspector Controls
 */

// Setup the block
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;

// Import block components
const {
  InspectorControls,
  BlockDescription,
  ColorPalette,
  MediaUpload
} = wp.editor;

// Import Inspector components
const {
  Toolbar,
  Button,
  PanelBody,
  PanelRow,
  PanelColor,
  FormToggle,
  RangeControl,
  SelectControl,
  ToggleControl,
  IconButton,
  TextControl
} = wp.components;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {
  constructor(props) {
    super(...arguments);
  }

  render() {
    // Setup the attributes
    const {
      backgroundColor,
      backgroundImage,
      backgroundImageID,
      backgroundSize,
      backgroundRepeat,
      fontColor,
      margin,
      padding
    } = this.props.attributes;

    const { setAttributes, isSelected } = this.props;

    const onSelectImage = img => {
      setAttributes({
        backgroundImageID: img.id,
        backgroundImage: img.url
      });
    };

    const onRemoveImage = () => {
      setAttributes({
        backgroundImageID: null,
        backgroundImage: null
      });
    };

    return (
      <InspectorControls key="inspector">
        <PanelBody title={__("Container Options")} initialOpen={true}>
          <TextControl
            label={__("Margin")}
            value={margin}
            onChange={value => setAttributes({ margin: value })}
          />

          <TextControl
            label={__("Padding")}
            value={padding}
            onChange={value => setAttributes({ padding: value })}
          />
        </PanelBody>

        <PanelBody title={__("Background")} initialOpen={false}>

          <TextControl
            label={__("Size")}
            value={backgroundSize}
            onChange={value => setAttributes({ backgroundSize: value })}
          />

          <TextControl
            label={__("Repeat")}
            value={backgroundRepeat}
            onChange={value => setAttributes({ backgroundRepeat: value })}
          />

          <p>{__("Select a background color:")}</p>

          <ColorPalette
            label={__("Background Color")}
            value={backgroundColor}
            onChange={value => setAttributes({ backgroundColor: value })}
          />
        </PanelBody>
        <PanelBody title={__("Font")} initialOpen={false}>
          <ColorPalette
            label={__("Font Color")}
            value={fontColor}
            onChange={value => setAttributes({ fontColor: value })}
          />
        </PanelBody>
      </InspectorControls>
    );
  }
}
