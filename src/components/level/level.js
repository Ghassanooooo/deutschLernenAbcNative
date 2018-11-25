import React, { Component } from "react";
import {
  Button,
  Container,
  Content,
  Card,
  CardItem,
  Text,
  Body,
  Spinner
} from "native-base";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import { Actions } from "react-native-router-flux";
import { StyleSheet } from "react-native";

class Level extends Component {
  componentDidMount() {
    this.props.getLevels();
  }
  render() {
    return (
      <Container>
        <Content padder>
          {this.props.levels ? (
            this.props.levels.map(items => (
              <Card key={items._id}>
                <CardItem header>
                  <Text>
                    {items.titeldeutsch} | {items.titelarabisch}
                  </Text>
                </CardItem>
                <CardItem>
                  <Body>
                    <Text>{items.beschreibungdeutsch}</Text>
                    <Text>{items.beschreibungarabisch}</Text>
                  </Body>
                </CardItem>
                <Button
                  style={styles.bt}
                  primary
                  onPress={() => Actions.subject(items._id)}
                >
                  <Text> Go To Subjects </Text>
                </Button>
              </Card>
            ))
          ) : (
            <Spinner color="blue" />
          )}
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  bt: {
    alignSelf: "center",
    marginBottom: 7
  }
});

const mapStateToProps = state => ({
  errors: state.errors,
  levels: state.levels.levels,
  loading: state.levels.loading,
  user: state.auth.user
});
export default connect(
  mapStateToProps,
  actions
)(Level);
