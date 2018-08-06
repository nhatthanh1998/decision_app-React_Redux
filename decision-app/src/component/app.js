import { connect } from "react-redux";
import React from "react";
import Header from "./header";
import Action from "./../container/action";
import Options from "./../container/options";
import AddOption from "./../container/addOption";
import { fetch_Options } from "./../action/index";
import { Segment, Grid, GridRow } from "semantic-ui-react";
import { bindActionCreators } from "redux";
import "semantic-ui-css/semantic.min.css";
class App extends React.Component {
  componentWillMount() {
    this.props.fetch_Options();
  }
  componentDidUpdate() {
    this.props.fetch_Options();
  }
  render() {
    return (
      <Segment inverted color="black">
        <Grid columns="8" centered>
          <GridRow>
            <Grid.Column width={1} />
            <Grid.Column width={6}>
              <Grid centered>
                <GridRow>
                  <Header />
                </GridRow>
                <GridRow>
                  <Action />
                </GridRow>
                <GridRow>
                  <Options />
                </GridRow>
                <GridRow>
                  <AddOption />
                </GridRow>
              </Grid>
            </Grid.Column>
            <Grid.Column width={1} />
          </GridRow>
        </Grid>
      </Segment>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      fetch_Options: fetch_Options
    },
    dispatch
  );
}
export default connect(null, mapDispatchToProps)(App);
