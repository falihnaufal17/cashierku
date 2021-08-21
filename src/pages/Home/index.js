import React, { lazy, useState } from 'react'
import './index.scss'
import Bear from '../../assets/images/bear.png'
import BlackForest from '../../assets/images/blackforest.png'
import ChickenKatsu from '../../assets/images/chickenkatsu.png'
import Chocorum from '../../assets/images/chocorum.png'
import FirdausRoslan from '../../assets/images/firdaus-roslan-pN769u0KHNA-unsplash.png'
import JeremyRicketts from '../../assets/images/jeremy-ricketts-6ZnhM-xBpos-unsplash.png'
import RedVelvet from '../../assets/images/redvelvet.png'
import Salmon from '../../assets/images/salmon.png'
import Wiener from '../../assets/images/wiener.png'

const Navbar = lazy(() => import('../../components/Navbar'))
const Leftbar = lazy(() => import('../../components/Leftbar'))
const ProductItem = lazy(() => import('../../components/ProductItem'))
const CartItem = lazy(() => import('../../components/CartItem'))

const Home = (p) => {
    const [selectedId, setSelectedId] = useState([])
    const [cart, setCart] = useState([])
    let data = [
        {
            id: 1,
            image: Bear,
            product_name: "Cofee Latte",
            price: 15000
        },
        {
            id: 2,
            image: BlackForest,
            product_name: "Black Forest",
            price: 30000
        },
        {
            id: 3,
            image: ChickenKatsu,
            product_name: "Chicken Katsu Dabu-dabu",
            price: 60000
        },
        {
            id: 4,
            image: Chocorum,
            product_name: "Choco Rhum",
            price: 28000
        },
        {
            id: 5,
            image: FirdausRoslan,
            product_name: "Cappucino",
            price: 5000
        },
        {
            id: 6,
            image: JeremyRicketts,
            product_name: "Espresso",
            price: 10000
        },
        {
            id: 7,
            image: RedVelvet,
            product_name: "Red Velvet Latte ",
            price: 33000
        },
        {
            id: 8,
            image: Salmon,
            product_name: "Salmon Truffle Teriyaki",
            price: 60000
        },
        {
            id: 9,
            image: Wiener,
            product_name: "Wiener Schnitzel",
            price: 69000
        },
    ]

    const onSelected = (id) => {
        let exist = selectedId.includes(id)
        if(!exist){
            setSelectedId([...selectedId, id])
            data.map(item => {
                if(item.id == id)
                    setCart([...cart, item])
            })
        }else{
            const newList = selectedId.filter((item) => item != id)
            const newListsCart = cart.filter((item) => item.id != id)
            setCart(newListsCart)
            setSelectedId(newList)
        }
    }

    return(
        <div>
            <Navbar count={cart.length} />
            <Leftbar />
            <div id="Home">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <section className="content">
                            <div className="row">
                                {
                                    data.length > 0 ?
                                        data.map((item, key) => {
                                            return (
                                                <div className="col-md-4" key={key}>
                                                    <ProductItem
                                                        selectedId={selectedId}
                                                        onSelected={onSelected}
                                                        {...item}
                                                        key={key} />
                                                </div>
                                            )
                                        }) :
                                    <div className="col-md-12">No food item in here!</div>
                                }
                            </div>
                            </section>
                        </div>
                        <div className="col-md-4 cart-section">
                            <div className="cart-content">
                                {
                                    cart.length > 0 ?
                                        cart.map((item, key) => {
                                            return(
                                                <CartItem
                                                    product_name={item.product_name}
                                                    key={key}
                                                    image={item.image}
                                                    price={item.price} />
                                            )
                                        }) :
                                    <div className="col-md-12">No Cart Here!</div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home