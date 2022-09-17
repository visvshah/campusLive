import React, { Component } from "react";
import "./navbar.scss";
import { Button } from "./Button";
import { MenuItems } from "./MenuItems";

export default function NavBar() {
    return (
        <div>
            <div className="navbar">
                <h1 className="navbar-logo">CampusLive</h1>
                <div className="menu-icon"></div>
                <ul className="nav-menu">
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        );
                    })}
                </ul>
                <a className='SignUpButton' href="#">
                    <Button>Sign Up</Button>
                </a>
                <a className='LoginButton' href="#">
                    <Button>Log In</Button>
                </a>
                
            </div>
        </div>
    );
}
