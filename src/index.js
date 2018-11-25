import React, { Component } from "react";
import { Scene, Router } from "react-native-router-flux";
import Level from "./components/level/level";
import Subject from "./components/subject/subject";
import SubjectContent from "./components/subjectContent/subjectContent";

class Index extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="level" initial component={Level} title="Levels" />
          <Scene key="subject" component={Subject} title="Subjects" />
          <Scene
            key="subjectContent"
            component={SubjectContent}
            title="Subject Content"
          />
        </Scene>
      </Router>
    );
  }
}

export default Index;
