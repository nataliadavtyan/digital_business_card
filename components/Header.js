import React from "react"

export default function Header() {
    return (
        <div className="header">
            <img className="portrait" src="../images/nataliadavtyan.jpg" alt="Natalia Davtyan portrait" />
            <h1>Natalia Davtyan</h1>
            <h2>Frontend developer</h2>
            <h6>nataliadavtyan.com</h6>
            <a href="mailto:natalia.davtyan@gmail.com"><button className="email-btn">
                <i className="fa-solid fa-envelope"></i>
                <p>Email</p>
            </button></a>
        </div>
    )
}