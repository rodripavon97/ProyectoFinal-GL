import React from "react"
import Footer from '../../components/Footer/Footer';

export const Perfil = () =>{ 

    return (
        <div>
            <img src= {User.picture} alt= {User.name} />
            <h2> {User.name}</h2>
            <p>Email {User.email}</p>
        </div>
    )
}
