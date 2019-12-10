import React from "react";

class StorePdp extends React.Component {
  state = { product: {} };

  componentDidMount() {
    this.getProduct();
  }

  getProduct = () => {
    fetch(
      "https://localhost:8989/vtex/get_product_by_id/" +
        this.props.match.params.id,
      {
        headers: {
          "Access-Control-Allow-Origin": "*"
        }
      }
    )
      .then(data => {
        return data.json();
      })
      .then(productDetail => {
        this.setState({ product: productDetail });
      });
  };
  goBack = () => {
    this.props.history.goBack();
  };
  render() {
    return (
      <>
        <button className="btn btn-secondary" onClick={this.goBack}>
          Go Back
        </button>

        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <div className="row p-2">
                <img
                  src="/imageDefault.png"
                  height="80px"
                  width="80px"
                  alt="thumb"
                />
              </div>
              <div className="row p-2">
                <img
                  src="/imageDefault.png"
                  height="80px"
                  width="80px"
                  alt="thumb"
                />
              </div>
              <div className="row p-2">
                <img
                  src="/imageDefault.png"
                  height="80px"
                  width="80px"
                  alt="thumb"
                />
              </div>
              <div className="row p-2">
                <img
                  src="/imageDefault.png"
                  height="80px"
                  width="80px"
                  alt="thumb"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div>
                <img alt="hero" src="/imageDefault.png" />
              </div>
            </div>
            <div className="col-md-6">
              <h2>{this.state.product.Name}</h2>
              <p>{this.state.product.Description}</p>
              <h4 style={{textDecoration:"line-through",color:"darkgray"}}>MSRP:  $7,500.00</h4>
              <h3>Price: $5,666.00</h3>
              <button className="btn btn-success">ADD TO CART</button>
            </div>
          </div>
        </div>

        <h1>Technical Aspects</h1>
        <hr />
        <p>Cupidatat ut nulla qui Lorem aliqua sit veniam nisi do officia. Sit consequat deserunt deserunt commodo reprehenderit Lorem excepteur ipsum nostrud. Mollit enim est consectetur non. Duis amet proident occaecat fugiat qui quis cillum</p>
      </>
    );
  }
}

export default StorePdp;
