import React, {Component, Fragment} from 'react';
import Header from "./Header.jsx";
import Body from "./Body.jsx";

class Cart extends Component {

    render = () => {
        return (<Fragment>
            <Header/>
            <Body/>
        </Fragment>);
    }

}

export default Cart;
