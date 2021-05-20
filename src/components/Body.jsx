import React, {Component, Fragment} from 'react';
import Table from "./body/Table.jsx";
import Buttons from "./body/Buttons.jsx";

class Body extends Component {

    state = {
        products: []
    }

    decrementPriceCount = (productName) => {
        let product = this.state.products.find(product => product.productName === productName);
        product.productCount = product.productCount - 1;
        this.setState({
            products: this.state.products
        });
    }

    incrementPriceCount = (productName) => {
        let product = this.state.products.find(product => product.productName === productName);
        product.productCount = product.productCount + 1;
        this.setState({
            products: this.state.products
        });
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
                <Buttons addNewProduct={this.addNewProduct} clearCart={this.clearCart}/>
            </div>
        </Fragment>);
    }

}

export default Body;
