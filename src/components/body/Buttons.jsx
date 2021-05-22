import React, {Component, Fragment} from 'react';

class Buttons extends Component {

    getModalContent = () => {
        return `<h2><center>Enter Product Name</center></h2>
    <h3><center><input id="productName" type="text" name="productName"></center></h3>`
    }

    clearCart = () => {
        this.props.clearCart();
    }

    render = () => {
        return (<Fragment>
            <a href="#add-product" className="btn btn-add-item">Add Item</a>
            <div onClick={this.clearCart} className="btn btn-update">Clear Cart</div>
        </Fragment>);
    }

}

export default Buttons;

//
