import React, { useEffect, useState } from "react";
import { NavLink, Link } from 'react-router-dom';

const navitems = [
    {
        to : "/",
        title : "Home"
    },
    {
        to : "/users",
        title : "Users"
    }
];
let activeStyle = {
    color: "red"
  };

const Header = () =>{
    const [profile,setProfile] = useState({});
    useEffect(()=>{
        const ls = localStorage.getItem('__PROFILE__');
        const d = JSON.parse(ls);
        setProfile(d);
    },[])

    return(
        <div className="d-flex align-items-center justify-content-between bg-info">
            <nav className="d-flex p-3 flex-direction-column ">
            {navitems.map(nav => {
               return <NavLink key={nav.title} style = {(isActive)=>isActive ? activeStyle: null}
               className="mx-4 text-white" to={nav.to}>{nav.title}</NavLink>;
            })}
            </nav>
            <div>
                <Link className="mx-4 text-white" to={`/profile/${profile.id}`}>Profile</Link>
            </div>
        </div>
    );
}

export default Header;