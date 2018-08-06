import { connect } from "react-redux";
import React from "react";
import _ from "lodash";
import { Button, Icon } from "semantic-ui-react";
import "./css/action.css";
import OptionModal from "./../container/actionModal";
class Action extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "",
      isOpen: false
    };
  }
  handleClick() {
    if (this.props.list) {
      var Random = _.random(this.props.list.data.length - 1);
      var selected = this.props.list.data[Random].option;
      return this.setState({
        isOpen: true,
        selected: selected
      });
    }
  }
  render() {
    return (
      <div>
        <Button
          size="massive"
          color="red"
          onClick={() => {
            this.handleClick();
          }}
        >
          <Icon name="signup" /> What should I do?
        </Button>
        <OptionModal
          isOpen={this.state.isOpen}
          selected={this.state.selected}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    list: state.options
  };
}

export default connect(mapStateToProps)(Action);
