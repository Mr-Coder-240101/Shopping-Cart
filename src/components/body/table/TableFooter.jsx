import React, {Component, Fragment} from 'react';

class TableFooter extends Component {

    render = () => {
        return (<Fragment>
            <div className="tf">
                <div className="row layout-inline">
                    <div className="col">
                        <p>Total : {this.props.total}</p>
                    </div>
                </div>
            </div>
        </Fragment>);
    }

}

export default TableFooter;
