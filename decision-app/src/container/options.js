import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { delete_Options } from "./../action/index";
import { Segment } from "semantic-ui-react";
import "./css/Option.css";
import React from "react";
class Option extends React.Component {
  getOptions() {
    if (this.props.options) {
      return this.props.options.data.map(option => {
        return (
          <Segment textAlign="left">
            {option.option}
            <a
              onClick={() => this.props.delete(option._id)}
              style={{ float: "right" }}
            >
              Delete
            </a>
          </Segment>
        );
      });
    }
  }
  render() {
    return <Segment.Group className="seg">{this.getOptions()}</Segment.Group>
  }
}
function mapStateToProps(state) {
  return {
    options: state.options
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ delete: delete_Options }, dispatch);
}
const Options = connect(mapStateToProps, mapDispatchToProps)(Option);
export default Options;
