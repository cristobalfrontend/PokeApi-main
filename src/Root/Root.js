import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../Root/root.css';



const Root = (props)  => {

    return (
        <div className='ctn-gui'>
            <aside className="ctn-aside">
                <div>
                    <Link to='/combate'>Combate</Link>
                    <Link to='/historial'>Historial</Link>
                    <Link to='/pokemon'>Pokemon</Link>
                    <Link to='/pokedex'>Pokedex</Link>
                </div>
            </aside> 
            <main> 
                <Outlet />
            </main>       
        </div>
    )
}; 

export default Root;    