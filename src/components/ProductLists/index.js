import React, { lazy } from 'react'
import './index.scss'
import PropTypes from 'prop-types'

const ProductItem = lazy(() => import('../ProductItem'))

const ProductLists = (p) => {
    return(
        <div className="row">
            {
                p.data.length > 0 ?
                    p.data.map((item, key) => {
                        return (
                            <ProductItem
                                selectedId={p.selectedId}
                                onSelected={p.onSelected}
                                {...item}
                                key={key} />
                        )
                    }) :
                <div className="col-md-12">No food item in here!</div>
            }
        </div>
    )
}

ProductLists.propTypes = {
    data: PropTypes.array,
    onSelected: PropTypes.func,
    selectedId: PropTypes.array
}

export default ProductLists