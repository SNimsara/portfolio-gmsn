import React, { useState } from 'react'
import './Navbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar = () => {

  const [menu,setMenu] = useState("home");

  return (
    <div className='navbar'>
        <ul className="nav-menu">
            <li><AnchorLink className={`anc-link ${menu === 'home' ? 'active' : ''}`} offset={60} href='#home'><p onClick={()=>setMenu("home")}> Home </p></AnchorLink></li>
            <li><AnchorLink className={`anc-link ${menu === 'about' ? 'active' : ''}`} offset={60} href='#about'><p onClick={()=>setMenu("about")}> About me </p></AnchorLink></li>
            <li><AnchorLink className={`anc-link ${menu === 'skills' ? 'active' : ''}`} offset={60} href='#skills'><p onClick={()=>setMenu("skills")}> Skills </p></AnchorLink></li>
            <li><AnchorLink className={`anc-link ${menu === 'project' ? 'active' : ''}`} offset={60} href='#project'><p onClick={()=>setMenu("project")}> Project </p></AnchorLink></li>
            <li><AnchorLink className={`anc-link ${menu === 'contact' ? 'active' : ''}`} offset={60} href='#contact'><p onClick={()=>setMenu("contact")}> Contact </p></AnchorLink></li>
        </ul>
    </div>
  )
}

export default Navbar