import React, { Component } from "react";
import { Container, Content, List, ListItem, Text, Spinner } from "native-base";
import { TouchableHighlight } from "react-native";

import { connect } from "react-redux";
import * as actions from "../../store/actions";
import { Actions } from "react-native-router-flux";

class Subject extends Component {
  componentDidMount() {
    if (this.props.data) {
      this.props.getSubjects(this.props.data);
    }
  }
  render() {
    var items = [
      "Simon Mignolet",
      "Nathaniel Clyne",
      "Dejan Lovren",
      "Mama Sakho",
      "Emre Can"
    ];
    return (
      <Container>
        <Content>
          {!this.props.loading ? (
            this.props.subjects.length === 0 ? (
              <Text> Please Add Some Subjects!</Text>
            ) : (
              <List
                dataArray={this.props.subjects}
                renderRow={subject => (
                  <ListItem>
                    <TouchableHighlight
                      underlayColor="blue"
                      onPress={() => Actions.subjectContent(subject._id)}
                    >
                      <Text>
                        {subject.titeldeutsch} || {subject.titelarabisch}
                      </Text>
                    </TouchableHighlight>
                  </ListItem>
                )}
              />
            )
          ) : (
            <Spinner color="blue" />
          )}
        </Content>
      </Container>
      // <Fragment>
      //   {this.props.user ? (
      //     <Link
      //       to={"/add-new-subject/" + this.props.match.params.id}
      //       className="btn btn-primary mr-3 mt-5"
      //     >
      //       add
      //     </Link>
      //   ) : null}

      //   {!this.props.loading ? (
      //     this.props.subjects.length <= 0 ? (
      //       <p> Please Add Some Subjects!</p>
      //     ) : (
      //       <div className="card mt-5">
      //         <ul className="list-group list-group-flush">
      //           {this.props.subjects.map(subject => (
      //             <li key={subject._id} className="list-group-item">
      //               <Link to={`/subject/subject-content/${subject._id}`}>
      //                 {subject.titeldeutsch} || {subject.titelarabisch}
      //               </Link>
      //             </li>
      //           ))}
      //         </ul>
      //       </div>
      //     )
      //   ) : (
      //     <Spinner />
      //   )}
      // </Fragment>
    );
  }
}
const mapStateToProps = state => ({
  errors: state.errors,
  subjects: state.subjects.subjects,
  loading: state.subjects.loading,
  user: state.auth.user
});
export default connect(
  mapStateToProps,
  actions
)(Subject);
