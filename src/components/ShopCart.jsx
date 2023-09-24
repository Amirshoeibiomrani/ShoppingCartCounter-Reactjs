import React, { useContext } from 'react';

// Components
import Cart from './shared/Cart';

// Context
import { CartContext } from '../context/CartContextProvider';

const ShopCart = () => {

    const {state, dispatch} = useContext(CartContext);

    return (
        <div>
            {state.selectedItems.map(item => <Cart key={item.id} data={item} />)}        
        </div>
    );
};

export default ShopCart;