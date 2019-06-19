import Container from './container';

const { Component } = wp.element;
const { InnerBlocks } = wp.blockEditor;

export default class Save extends Component {
    
    constructor(props) {
        super(...arguments);
    }

    render() {
        return (
            <Container {...this.props}>
                <InnerBlocks.Content />
            </Container>
        );
    }
}