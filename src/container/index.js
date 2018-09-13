/**
 * BLOCK: Atomic Blocks Container
 */

// Import block dependencies and components
import classnames from "classnames";
import Inspector from "./components/inspector";
import Container from "./components/container";

// Components
const { __ } = wp.i18n;

// Extend component
const { Component } = wp.element;

// Register block
const { registerBlockType } = wp.blocks;

// Register editor components
const {
  AlignmentToolbar,
  BlockControls,
  BlockAlignmentToolbar,
  MediaUpload,
  RichText,
  InnerBlocks
} = wp.editor;

// Register components
const {
  Button,
  withFallbackStyles,
  IconButton,
  Dashicon,
  withState,
  Toolbar,
  TextControl
} = wp.components;

const blockAttributes = {
  backgroundColor: {
    type: "string",
    default: "transparent"
  },
  backgroundImage: {
    type: "string",
    default: ''
  },
 backgroundImageID: {
    type: "number"
  },
  backgroundRepeat: {
    type: "string",
    default: 'no-repeat'
  },
  backgroundSize: {
    type: "string",
    default: 'cover'
  },
  fontColor: {
    type: "string"
  },
  layout: {
    type: "string",
    default: "center"
  },
  margin: {
    type: "string"
  },
  padding: {
    type: "string"
  }
};

class Backend extends Component {
  render() {

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

    // Setup the attributes
    const {
        attributes: {
          backgroundImageID,
          layout,
      },
      setAttributes
    } = this.props;

    return [
      // Block controls
      <BlockControls>
			<BlockAlignmentToolbar
				value={ layout }
				onChange={value => setAttributes({ layout: value })}
                controls={['center', 'wide', 'full']}
			/>
			<Toolbar>
				<MediaUpload
					onSelect={ onSelectImage }
					type="image"
					value={ backgroundImageID }
					render={ ( { open } ) => (
						<IconButton
							className="components-toolbar__control"
							label={ __( 'Edit image' ) }
							icon="format-image"
							onClick={ open }
						/>
					) }
				/>
                {backgroundImageID ? (
                    <IconButton
                        className="components-toolbar__control"
                        label={ __( 'Remove image' ) }
                        icon="no-alt"
                        onClick={ onRemoveImage }
                    />
                ) : (
                  ''
                )}
			</Toolbar>
		</BlockControls>,
      // Show the block controls on focus
      <Inspector {...{ setAttributes, ...this.props }} />,
      // Show the container markup in the editor
      <Container {...this.props}>
        <InnerBlocks />
      </Container>
    ];
  }
}

class Frontend extends Component {
    render() {
        return (
          <Container {...this.props}>
            <InnerBlocks.Content />
          </Container>
        );
    }
}

// Register the block
registerBlockType("horttcore/container", {
  title: __("Container"),
  description: __(
    "Add a container block to wrap several blocks in a parent container."
  ),
  icon: "editor-table",
  category: "widgets",
  keywords: [__("container"), __("section"), __("wrapper")],
  attributes: blockAttributes,
  supports: {
		alignWide: false,
		alignFull: true,
	},
  // Render the block components
  edit: Backend,
  // Save the attributes and markup
  save: Frontend,
});
