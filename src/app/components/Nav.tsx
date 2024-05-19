'use client'
import '../css/nav.scss';
import { navLinks } from '../data/Data';
import { useState } from 'react';

function Nav() {

    let [navIndex] = useState(navLinks[0].id);

    return (
        <section className='nav_header'>
            <div className='navbar'>
                <div className='hamburger_menu_container'>
                    <label className='hamburger_menu'>
                        <input type='checkbox'></input>
                        <div className='nav_buttons'>
                            <div className="flex space-x-5">
                                {navLinks.map((nav) => {
                                    return (
                                        <a
                                        href={nav.link}
                                        key={nav.id}
                                        className={`${
                                            navIndex === nav.id ? "absolute bg-white text-black rounded-full mix-blend-difference" : "text-white hover:opacity-50"
                                        } relative px-3 py-1.5`}
                                        >
                                        {nav.title}
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </label>
                </div>
            </div>
      </section>
    )
}

export default Nav