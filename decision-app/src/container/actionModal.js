import React from "react";
import { Modal, Header, Icon, Button } from "semantic-ui-react";

class OptionModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      selected: ""
    };
  }
  componentWillReceiveProps(props) {
    this.setState({ isOpen: props.isOpen, selected: props.selected });
  }

  render() {
    return (
      <Modal className="scrolling" open={this.state.isOpen} >
        <Header icon="trophy" color="yellow" content="A suggest for you" />
        <Modal.Content>
          <p>
            Now I think you should take <h2 style={{color:"green"}}>{this.state.selected}</h2> to
            improve your skill!
          </p>
        </Modal.Content>
        <Modal.Actions>
          <Button
            color="green"
            inverted
            onClick={() => {
              this.setState({
                isOpen: false,
                selected: ""
              });
            }}
          >
            <Icon name="checkmark" /> Yes
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default OptionModal;
