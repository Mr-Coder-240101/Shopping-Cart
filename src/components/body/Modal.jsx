import React, {Component, Fragment} from 'react';

class Modal extends Component {

    addNewProduct = () => {
        const productName = document.getElementById("productName").value;
        const productPrice = document.getElementById("productPrice").value;
        const productCount = 1;
        this.props.addNewProduct({productName, productPrice, productCount});
    }

    render() {
        return (<Fragment>
            <div className="modal-container" id="add-product">
                <div className="modal">
                    <div className="modal__details">
                        <h1 className="modal__title">Add Product</h1>
                    </div>
                    <center>
                        <h3>
                            <label style={{
                                    fontSize: 18
                                }} htmlFor="productName">Enter Product Name : &nbsp;</label>
                            <input type="text" id="productName" name="productName"/>
                        </h3>
                        <h3>
                            <label style={{
                                    fontSize: 18
                                }} htmlFor="productPrice">Enter Product Price : &nbsp;</label>
                            <input type="text" id="productPrice" name="productPrice"/>
                        </h3>
                        <div>
                            <a href="#shopping-cart" className="modal__btn" onClick={this.addNewProduct}>Save &rarr;</a>
                        </div>
                    </center>
                </div>
            </div>
        </Fragment>);
    }

}

export default Modal;
