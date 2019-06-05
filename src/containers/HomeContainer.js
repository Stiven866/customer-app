import React, { Component } from 'react';
import AppFrame from './../components/AppFrame';
import CustomersActions from './../components/CustomersActions';

class HomeContainer extends Component {

    handleOnClick = () => {
        console.log("handleOnClick"); 
        this.props.history.push("/customers");
    };

    render() {
        return (
            <div>
                <AppFrame 
                    header="Home"
                    body={
                        <div> 
                            Esta es la pantalla Inicial
                            <CustomersActions>
                                <button onClick={this.handleOnClick}>Listado de clientes</button>
                            </CustomersActions> 
                        </div>
                    }></AppFrame>
            </div>
        );
    }
}


export default HomeContainer;