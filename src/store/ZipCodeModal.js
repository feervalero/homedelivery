import React from "react";
import cookie from 'react-cookies';
class ZipCodeModal extends React.Component {
  state = { zipCode: "", validated: false };

  validateZipCode = e => {
    this.setState({ zipCode: e.target.value });
    var validated = fetch(
      "https://localhost:8989/vtex/validate_zipcode/" + e.target.value,
      {
        headers: {
          "Access-Control-Allow-Origin": "*"
        }
      }
    )
      .then(data => {
        return data.json();
      })
      .then(dato => {
        if (dato.error) return this.setState({ validated: false });
        else return this.setState({ validated: true });
      });
  };

  setZipCode = () =>{
    cookie.save("zipCode",this.state.zipCode)
  }

  render() {
    return (
      <div
        className="modal fade"
        id="zipCodeModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="zipCodeModal"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Choose your Zip Code for delivery
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <input
                value={this.state.zipCode}
                onChange={this.validateZipCode}
                type="text"
              />
            </div>
            <div className="modal-footer">
              

              <button
                type="button"
                className="btn btn-primary"
                data-toggle="modal"
                data-target="#zipCodeModal"
                disabled={!this.state.validated}
                onClick={this.setZipCode}
              >
                Validate
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ZipCodeModal;
