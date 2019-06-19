
const { __ } = wp.i18n;
const { Component } = wp.element;

const {
    BlockControls,
    MediaUpload,
    MediaUploadCheck
} = wp.blockEditor;

const {
    Toolbar,
    IconButton
} = wp.components;

export default class Controls extends Component {

    constructor(props) {
        super(...arguments);
    }

    render() {

        const {
            onSelectImage,
            onRemoveImage,
            attributes: {
                backgroundImageID,
            }
        } = this.props;

        return (
            <MediaUploadCheck>
                <BlockControls>
                    <Toolbar>
                        <MediaUpload
                            onSelect={onSelectImage}
                            type="image"
                            value={backgroundImageID}
                            render={({ open }) => (
                                <IconButton
                                    className="components-toolbar__control"
                                    label={ backgroundImageID ? __("Edit image", "wp-container-block") : __("Add image", "wp-container-block")}
                                    icon="format-image"
                                    onClick={open}
                                />
                            )}
                        />
                        {backgroundImageID ? (
                            <IconButton
                                className="components-toolbar__control"
                                label={__("Remove image", "wp-container-block")}
                                icon="no-alt"
                                onClick={onRemoveImage}
                            />
                        ) : (
                            ""
                        )}
                    </Toolbar>
                </BlockControls>
            </MediaUploadCheck>
        )
    }
}
