import React from 'react';
import PropTypes from 'prop-types';
import CustomerListItem from './CustomerListItem';

const CustomerList = ({ customers, urlPath}) => {
    return (

        <div className="customers-list">
        {
            customers.map( c => 
                <CustomerListItem
                    key={c.dni}
                    name={c.name}
                    editAction={'Editar'}
                    delAction={'Eliminar'}
                    urlPath={urlPath}
                    dni={c.dni}
                />
                ) 
        }
            
        </div>
    );
};

CustomerList.propTypes = {
    customers: PropTypes.array.isRequired,
    urlPath: PropTypes.string.isRequired,
};

export default CustomerList;