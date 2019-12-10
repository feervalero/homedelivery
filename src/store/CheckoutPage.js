import React from 'react';
import CartPreviewLine from './CartPreviewLine';

class CheckoutPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="container">
                <h3>Checkout</h3>
                <hr />
                <CartPreviewLine />
                <CartPreviewLine />
                <hr />
                <div className="row d-flex">
                    <div className="flex-grow-1"></div>
                    <h5 className="p-2">Total: $45,000.00</h5>
                </div>
            </div>
        );
    }
}
 
export default CheckoutPage;