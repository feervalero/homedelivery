import React from "react";
import axios from "axios";
class Cities extends React.Component {
  state = { cities: [],city:{} };

  componentDidMount() {
    this.list_all_cities();
    
  }

  list_all_cities = () => {
    axios.get("http://localhost:3002/cities").then(result => {
      this.setState({ cities: result.data.data });
    });
  };
  editAction = (city) =>{
    this.setState({city:city});
  }

  render() {
    return (
      <>
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Cluster</th>
              <th>State</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.cities.map(city => (
              <tr>
                <td>{city.ClusterId}</td>
                <td>{city.Cluster}</td>
                <td>{city.State}</td>
                <td className="text-center p-30">
                  <button type="button" onClick={()=>this.editAction(city)} class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                    EDIT
                  </button>

                  <button type="button" class="btn btn-danger">
                    DELETE
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
              <h4>{this.state.city.Id}</h4>
            <input value={this.state.city.State} />
            <input value={this.state.city.Cluster} />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Cities;
