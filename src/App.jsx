import "./App.css";
import React, {Component, Fragment} from "react";
import Cart from "./components/Cart.jsx";

class App extends Component {
    render = () => {
        return (<Fragment>
            <div className="container">
                <Cart/>
            </div>
        </Fragment>);
    }
}

export default App;
