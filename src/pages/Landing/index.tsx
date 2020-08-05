import React from 'react';
import {Link} from 'react-router-dom';
import logoImg from '../../assets/images/logo.svg';
import lnadingImg from '../../assets/images/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';
import './styles.css';

function Landing(){
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="Proffy"/>
                    <h2>Sua Plataforma de estudos Online</h2>
                </div>
                <img 
                    src={lnadingImg} 
                    alt="Plataforma de estudos" 
                    className="hero-image"
                />
                <div className="buttons-container">
                    <Link to="/study" className="study">
                        <img src={studyIcon} alt="Estudar"/>
                        Estudar
                    </Link>
                    <Link to="/give-classes" className="give-classes">
                        <img src={giveClassesIcon} alt="Estudar"/>
                        Dar aulas
                    </Link>
                </div>

                <span className="total-conections">
                    Total de 200 conexões já realizadas <img src={purpleHeartIcon} alt="coracao"/>
                </span>
            </div>
        </div>
    )
}

export default Landing;