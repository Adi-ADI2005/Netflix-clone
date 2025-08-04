import React from "react";
import "./navbar.css"
import NetflixLogo from "../Assets/netflix-logo.png"


export default function Navbar() {
    return (
        <>
            <div className="navigation">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <img src={NetflixLogo} alt="" className="img-fluid netflix-logo" />
                        </div>
                        <div className="gap-2 gap-sm-5 d-flex">
                            <div className="language-bg">
                                <i class="bi bi-globe-asia-australia-fill text-white"></i>
                                <select className="language">
                                    <option value="">English</option>
                                    <option value="">Hindi</option>
                                    <option value="">Telugu</option>
                                    <option value="">Odia</option>
                                    <option value="">Sambalpuri</option>
                                </select>
                            </div>
                            <button className="signin-btn">Sign In</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}