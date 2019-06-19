/**
 * BLOCK: Atomic Blocks Container
 */

// Import block dependencies and components
import attributes from "./components/attributes";
import edit from "./components/edit";
import save from "./components/save";

// Components
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

// Register the block
registerBlockType("horttcore/container", {
    title: __("Container", "wp-container-block"),
    description: __("Add a container block to wrap several blocks in a parent container.", "wp-container-block"),
    icon: "editor-table",
    category: "layout",
    keywords: [__("Wrapper", "wp-container-block"), __("Section", "wp-container-block"), __("Group", "wp-container-block")],
    attributes,
    supports: {
        align: ['wide', 'full'],
    },
    // Render the block components
    edit,
    // Save the attributes and markup
    save
});
