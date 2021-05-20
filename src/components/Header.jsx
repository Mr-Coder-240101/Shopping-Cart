import React, {Component, Fragment} from 'react';

class Header extends Component {

    render() {
        return (<Fragment>
            <div className="heading">
                <h1>
                    <span className="shopper">
                        <i className="fas fa-shopping-cart">&nbsp;</i>
                    </span>
                    Shopping Cart
                </h1>
            </div>
        </Fragment>);
    }

}

export default Header;
