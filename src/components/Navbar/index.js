import React from 'react'
import './index.scss'
import IcMenu from '../../assets/images/menu (1).png'
import IcSearch from '../../assets/images/magnifying-glass.png'

const Navbar = (p) =>{

    const collapse = (e) => {
        e.preventDefault();

        const body = document.getElementsByTagName('body')[0];

        const hasClass = (el, cls) => {
            return el.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
        }

        if (!hasClass(body, 'sidebar-collapse')) {
            body.classList.add('sidebar-collapse');
        } else {
            body.classList.remove('sidebar-collapse');
        }
    };

    return (
        <nav className="navbar">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-auto">
                                <a href="#" onClick={collapse}>
                                    <img src={IcMenu} alt="menu bar" />
                                </a>
                            </div>
                            <div className="col">
                                <div className="title">Food Item</div>
                            </div>
                            <div className="col-md-auto">
                                <img src={IcSearch} alt="search" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 border-left">
                        <div className="cart-label">Cart <div className="count">{p.count}</div></div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar