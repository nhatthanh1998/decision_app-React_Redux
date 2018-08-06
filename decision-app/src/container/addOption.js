import React from "react";
import { bindActionCreators } from "redux";
import { Field, reduxForm } from "redux-form";
import { submit } from "./../action/index";
import { connect } from "react-redux";
import { Label, Button, Icon, Grid, GridRow, GridColumn } from "semantic-ui-react";
import "bulma/css/bulma.css";
import "./css/addOption.css";
const validate = values => {
  const errors = {};
  if (!values.option) {
    errors.option = "Required";
  }
  return errors;
};

const renderField = ({ label, input, type, meta: { touched, error } }) => (
  <div>
    <Grid >
      <GridRow>
        <GridColumn>
          <input
            className="input is-primary has-icons-right is-medium"
            {...input}
            placeholder={label}
            type={type}
          />
          </GridColumn>
          <Button icon labelPosition="right" className="button" size="small">
            Add Option
            <Icon name="right arrow" />
          </Button>
      </GridRow>
    </Grid>
    {touched &&
      (error && (
        <Label pointing color="red">
          Please enter a value
        </Label>
      ))}
  </div>
);

class OptionForm extends React.Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.props.submit)} className="form">
        <Field
          name="option"
          type="text"
          component={renderField}
          label="Input your option here"
        />
      </form>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      submit: submit
    },
    dispatch
  );
}

OptionForm = connect(null, mapDispatchToProps)(OptionForm);

export default reduxForm({
  form: "form options",
  validate
})(OptionForm);
