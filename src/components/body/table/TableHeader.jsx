import React, {Component, Fragment} from 'react';

class TableHeader extends Component {

    render = () => {
        return (<Fragment>
            <div className="layout-inline row th">
                <div className="col col-pro">Product</div>
                <div className="col col-price align-center ">
                    Price
                </div>
                <div className="col col-qty align-center">QTY</div>
                <div className="col">Total</div>
            </div>
        </Fragment>);
    }

}

export default TableHeader;
