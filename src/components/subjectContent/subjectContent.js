import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import {
  Container,
  Content,
  Card,
  CardItem,
  Text,
  Body,
  Spinner
} from "native-base";
import * as actions from "../../store/actions";

class subjectContent extends Component {
  componentDidMount() {
    if (this.props.data) {
      this.props.getSubjectsContent(this.props.data);
    }
  }
  render() {
    return (
      <Container>
        <Content>
          {this.props.loading ? (
            <Spinner color="blue" />
          ) : this.props.subjectsCountent ? (
            <Card>
              <CardItem header>
                <Text> {this.props.subjectsCountent.beschreibung}</Text>
              </CardItem>
              <CardItem>
                <Body>
                  {this.props.subjectsCountent.inhalten &&
                    this.props.subjectsCountent.inhalten.map(inhalt => (
                      <Text key={inhalt._id}>
                        {" "}
                        {inhalt.deutsch} | {inhalt.arabisch}
                      </Text>
                    ))}
                </Body>
              </CardItem>

              {this.props.subjectsCountent.beispielen &&
                this.props.subjectsCountent.beispielen.map(beispiel => (
                  <CardItem footer key={beispiel._id}>
                    <Text>
                      {beispiel.deutsch} | {beispiel.arabisch}
                    </Text>
                  </CardItem>
                ))}
            </Card>
          ) : (
            <Text>Please Add Subject Content</Text>
          )}
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.subjectsCountent.loading,
  errors: state.errors,
  subjectsCountent: state.subjectsCountent.subjectsCountent,
  user: state.auth.user
});
export default connect(
  mapStateToProps,
  actions
)(subjectContent);
