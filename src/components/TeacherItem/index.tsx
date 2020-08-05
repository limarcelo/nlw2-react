import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css'
function TeacherItem(){
    return (
        <article className="teacher-item">
        <header>
            <img src="https://media-exp1.licdn.com/dms/image/C5603AQED2JbiPpn5Lw/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=S69Lw9F9vYLCTGI17QgMStZuFEkeG9Dz04t0efaOFH4" alt="Marcleo"/>
             <div>
                 <strong>Marcelo lima</strong>
                 <span>Química</span>
             </div>
        </header>
        <p>
            Entusiasta das melhores tecnologias de quimica avançada.
            <br /><br />
            Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências.
        </p>
        <footer>
            <p>Preço/Hora
                 <strong>R$ 80,00</strong>
            </p>
            <button type="button">
                <img src={whatsappIcon} alt="Whatsapp"/>
                Entrar em Contato
            </button>
        </footer>
    </article>
    )
}

export default TeacherItem;