import React, {Component, Fragment} from 'react';
import Table from "./body/Table.jsx";
import Buttons from "./body/Buttons.jsx";
import Modal from "./body/Modal.jsx";

class Body extends Component {

    state = {
        products: []
    }

    decrementPriceCount = (productId) => {
        let product = this.state.products.find(product => product.productId === productId);
        product.productCount = product.productCount - 1;
        this.setState({products: this.state.products});
    }

    incrementPriceCount = (productId) => {
        let product = this.state.products.find(product => product.productId === productId);
        product.productCount = product.productCount + 1;
        this.setState({products: this.state.products});
    }

    addNewProduct = (product) => {
        this.state.products.push(product)
        this.setState({products: this.state.products})
    }

    clearCart = () => {
        this.setState({products: []})
    }

    render() {
        return (<Fragment>

                <div className="cart transition is-open">
                    <Table products={this.state.products} incrementPriceCount={this.incrementPriceCount} decrementPriceCount={this.decrementPriceCount}/>
                    <Buttons clearCart={this.clearCart}/>
                    <Modal addNewProduct={this.addNewProduct}/>
                </div>

        </Fragment>);
    }

}

export default Body;
