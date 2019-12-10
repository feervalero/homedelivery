import React from "react";
import PLPGridItem from "./store/PLPGridItem";

const URL_GETCATEGORIES =
  "https://localhost:8989/vtex/categories";

class StorePlp extends React.Component {
  state = { categories: [], products:[]};

  componentDidMount() {
    this.getAllCategories();
    this.getAllProducts();
  }

  getAllProducts = () => {
    fetch("https://localhost:8989/vtex/get_products", {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    }).then(res => res.json()).then(data =>this.setState({products:data}));
    
  };

  getAllCategories = () => {
    fetch(URL_GETCATEGORIES, {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    }).then(res => res.json()).then(data =>this.setState({categories:data}));
  };

  render() {
    return (
      <div className="d-flex align-content-end flex-wrap">
        {/*this.state.categories.map((category) => (<p>{category.name}</p>))*/}

        {this.state.products.map((product) => (<PLPGridItem product={product} key={product.Id}  />))}
        
      </div>
    );
  }
}

export default StorePlp;
