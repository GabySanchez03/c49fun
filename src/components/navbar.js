import React from 'react';
import { Link } from 'react-router-dom';
const navbar=() =>{
    return(
        <div>
            <li>
                <Link to="/">catworld</Link>
            </li>
            <li>
                <Link to="/">cyclecat</Link>
            </li>
            <li>
                <Link to="/">noncyclecat</Link>
            </li>
        </div>
    );
}

export default navbar;