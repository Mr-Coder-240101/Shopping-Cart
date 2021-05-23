import React, {Component, Fragment} from 'react';

class TableRow extends Component {

    getTotalPrice = () => {
        return this.props.product.productCount * this.props.product.productPrice;
    }

    decrementPriceCount = () => {
        this.props.decrementPriceCount(this.props.product.productId);
    }

    incrementPriceCount = () => {
        this.props.incrementPriceCount(this.props.product.productId);
    }

    getClass = () => {
        if(this.props.product.productCount === 0) {
            return "qty qty-minus qty-disable";
        } else {
            return "qty qty-minus";
        }
    }

    addElementsBasedOnConditions = () => {
        if (this.props.message) {
            return (<Fragment>
                <div className="col col-msg layout-inline">
                    <p>{this.props.message}</p>
                </div>
            </Fragment>)
        } else {
            return (<Fragment>
                <div className="col col-pro layout-inline">
                    <p>{this.props.product.productName}</p>
                </div>
                <div className="col col-price col-numeric align-center ">
                    <p>₹{this.props.product.productPrice}</p>
                </div>
                <div className="col col-qty layout-inline">
                    <span onClick={this.decrementPriceCount} className={this.getClass()}>-</span>
                    <input type="numeric" value={this.props.product.productCount} disabled="disabled"/>
                    <span onClick={this.incrementPriceCount} className="qty qty-plus">+</span>
                </div>
                <div className="col col-total col-numeric">
                    <p>₹{this.getTotalPrice()}</p>
                </div>
            </Fragment>)
        }
    }

    render = () => {
        return (<Fragment>
            <div className="layout-inline row">
                {this.addElementsBasedOnConditions()}
            </div>
        </Fragment>);
    }

}

export default TableRow;
