import React, { Component } from "react";
import "./navbar.scss";
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
            </div>
        </div>
    );
}
