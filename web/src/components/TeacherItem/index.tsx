import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

function TeacherItem() {
    return(
        <article className="teacher-item">
            <header>
                <img src="https://instagram.ffor15-1.fna.fbcdn.net/v/t51.2885-19/s150x150/36626592_647483195613843_5621255881359360000_n.jpg?_nc_ht=instagram.ffor15-1.fna.fbcdn.net&_nc_ohc=DKKhUc3jWKgAX9IQjK4&oh=4bfb62bc15e0f92c30fb7a31051800a7&oe=5F5747EC" alt="Gabriel Studart"/>
                <div>
                    <strong>Gabriel Studart</strong>
                    <span>Empreendedorismo</span>
                </div>
            </header>

            <p>
                Entusiasta de Empreendedorismo e de Empresas Juniores.
                <br/><br/>
                Apaixonado por gestão e tecnologia, tem o sonho de empreender um dia, ter sua propria startup e em 2020 alcançar o Alto Impacto da GTi.
            </p>

            <footer>
                <p>
                    Preço/hora 
                    <strong>R$ 100,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato 
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;