import React from 'react'
import './index.scss'
import PropType from 'prop-types'
import Checked from '../../assets/images/tick (1).png'

const ProductItem = (p) => {
    const onSelected = (id) => {
        p.onSelected(id)
    }
    return(
        <a href="#" className="item" onClick={() => onSelected(p.id)}>
            <div className="img-relative">
                {p.selectedId.map((item, key) => {
                    if(item == p.id){
                        return (
                            <div className="selected" key={key}>
                                <div></div>
                                <div>
                                    <img src={Checked} alt="checked" />
                                </div>
                                <div></div>
                            </div>
                        )
                    }
                })}
                <img src={p.image} alt={p.product_name} />
            </div>
            <div className="product-name">{p.product_name}</div>
            <div className="price">Rp. {p.price}</div>
        </a>
    )
}

ProductItem.propTypes = {
    image: PropType.string,
    product_name: PropType.string,
    price: PropType.number,
    selectedId: PropType.array,
    key: PropType.number,
    onSelected: PropType.func,
    id: PropType.number
}

ProductItem.defaultProps = {
    selectedId: []
}

export default ProductItem