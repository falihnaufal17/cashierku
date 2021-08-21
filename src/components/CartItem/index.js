import React from 'react'
import './index.scss'
import PropType from 'prop-types'

const CartItem = p => {
    return(
        <div className="row cart-item" key={p.key}>
            <div className="col-auto">
                <img src={p.image} alt={p.product_name} />
            </div>
            <div className="col">
                <div className="product-data">{p.product_name}</div>
                <div className="row">
                    <div className="col">
                        
                    </div>
                    <div className="col">
                        <div className="price">Rp. {p.price}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

CartItem.propTypes = {
    image: PropType.string,
    key: PropType.number,
    product_name: PropType.string,
    price: PropType.number
}


export default CartItem