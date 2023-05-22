import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {

    const [open, setOpen] =useState(false)
    const routes = [
        {
          id: 1,
          name: 'Home',
          path: '/'
        },
        {
          id: 2,
          name: 'About',
          path: '/about'
        },
        {
          id: 3,
          name: 'Products',
          path: '/products'
        },
        {
          id: 4,
          name: 'Contact',
          path: '/contact'
        },
        {
          id: 5,
          name: 'Blog',
          path: '/blog'
        }
      ];
      
    return (
        <nav className='bg-blue-400 '>
             <div onClick={()=>setOpen(!open)} className='md:hidden ms-5 p-2'>
                <span>{open === true ? <XMarkIcon className="h-6 w-6 text-blue-500" /> : <Bars3Icon className="h-6 w-6 text-blue-500" />}</span>
             
             </div>
            <ul className={`md:flex absolute duration-300 md:static bg-blue-400 p-2 ps-10  ${open ? 'top-6 ' : '-top-32'}`}>
                {
                    routes.map(route=> <Link 
                        key={route.id}
                        route={route}
                    ></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;