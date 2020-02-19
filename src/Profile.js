import React, { Component } from 'react';
import App from "./App";

class Profile extends Component {
  render() {
      return (
          <div className="Profile">
              <h1>This is from Profile Page of Mrs. {this.props.name}</h1>
          </div>
      );
  }
}

export default Profile;