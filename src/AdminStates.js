import React from "react";
import axios from "axios";

class AdminStates extends React.Component {
  state = { states: [] };

  componentDidMount() {
    this.list_all_states();
  }

  list_all_states = () => {
    axios.get("http://localhost:3002/states").then(result => {
      this.setState({ states: result.data.data });
    });
  };
  render() {
    return (
      <>
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>State</th>
              <th>ClusterId</th>
            </tr>
          </thead>
          <tbody>
            {this.state.states.map(data => (
              <tr>
                <td>{data.Id}</td>
                <td>{data.State}</td>
                <td>{data.ClusterId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default AdminStates;
