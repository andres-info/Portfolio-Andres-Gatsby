import React from 'react';
import { Link } from 'gatsby';
import './header.scss';
export default function Header() {
    return (

        <div>
            <h1 className='header-title'> I am header</h1>

            <Link to='/'>Home </Link>
            <Link to='/about'>About </Link>
            <Link to='/blogs'>Blogs </Link>
            <Link to='/doesntexist'>Doesnt exist </Link>


        </div>
    )
}