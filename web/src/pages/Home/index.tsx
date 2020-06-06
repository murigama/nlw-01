import React from 'react';
import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";

import logo from '../../assets/logo.svg'

import './styles.css';

const Home = () => {
  return (
    <div id="page-home">
        <div className="content">
            <header>
                <img src={logo} alt="Ecoleta"/>
            </header>
            <main>
                <h1>Seu marketplace de Ccoleta de residuos</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique eveniet, perspiciatis sed eos eius, obcaecati voluptatibus esse aspernatur accusamus quae at minus odit iure velit, sequi quidem ratione fuga soluta.</p>
                <Link to="/create-point"><span><FiLogIn/></span><strong>Cadaster um ponto</strong></Link>
            </main>
        </div>
    </div>
  );
}

export default Home;