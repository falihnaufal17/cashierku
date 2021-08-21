import React from 'react'
import './index.scss'
import IcFork from '../../assets/images/fork.png'
import IcClipboard from '../../assets/images/clipboard.png'
import IcAdd from '../../assets/images/add.png'
import { Link } from 'react-router-dom'

const Leftbar = (p) =>{
    return (
        <aside className="sidebar">
            <div>
                <Link to="/"><img src={IcFork} /></Link>
            </div>
            <div>
                <Link to="/history"><img src={IcClipboard} /></Link>
            </div>
            <div>
                <a href="#"><img src={IcAdd} /></a>
            </div>
        </aside>
    )
}

export default Leftbar