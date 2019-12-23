import React, { Component } from 'react'

export default class Navigation extends Component {
    render() {
        return (
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="/">InmOkey - Challenge | Francisco Sempé</a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">Inicio <span className="sr-only">(current)</span></a>
                            </li>
                        </ul>
                    </div>
                </nav>
                )
            }
        }
