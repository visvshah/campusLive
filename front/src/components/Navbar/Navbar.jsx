import React from "react";
import "./navbar.scss";
import { Button } from "./Button";
import { MenuItems } from "./MenuItems";
import logo from './logo.png';

export default function NavBar() {
    return (
        <div>
            <div className="navbar">
                <div className="navlogo">
                    <img className="nav-logo" alt = "CampusLive" src={logo} />
                </div>
                <div className="nav-menu">
                    {MenuItems.map((item, index) => {
                        return (
                            <a className={item.cName} href={item.url}>
                                <Button>{item.title}</Button>
                            </a>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
