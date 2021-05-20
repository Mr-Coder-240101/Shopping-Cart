import React, {Component, Fragment} from 'react';

class Buttons extends Component {

    addNewProduct = () => {
        const productName = prompt("Enter Product Name : ");
        const productPrice = prompt("Enter Product Price : ");
        const productCount = 1;
        this.props.addNewProduct({productName, productPrice, productCount});
    }

    clearCart = () => {
        this.props.clearCart();
    }

    render = () => {
        return (<Fragment>
                <div onClick={this.addNewProduct} className="btn btn-add-item">Add Item</div>
                <div onClick={this.clearCart} className="btn btn-update">Clear Cart</div>
        </Fragment>);
    }

}

export default Buttons;
