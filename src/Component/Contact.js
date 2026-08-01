
import React, { useContext, useRef } from 'react'
import { contexto } from '../Provider'
import emailjs from '@emailjs/browser';
import { Bounce, Flip, toast } from 'react-toastify';


export const Contact = () => {

    const { updateContactUs, constacUs } = useContext(contexto)



    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('', '', form.current, {
                publicKey: '',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );

        notify()
        updateContactUs(!constacUs)
    };


    const notify = () => {
        toast.success('Mensaje enviado.', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            style: {
                background: "rgb(56, 225, 6)",
                width: "250px",
                fontSize: "15px",
                fontFamily: "Baloo Bhaijaan 2, serif",
                fontWeight: "800",
                textAlign: "center",
                borderRadius: "10px",
                border: "black solid 1px",
                color: "black"
            },
            transition: Bounce,
        });

        toast.info('Te responderemos a la brevedad', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            style: {
                background: "black",
                width: "250px",
                fontSize: "15px",
                fontFamily: "Baloo Bhaijaan 2, serif",
                fontWeight: "800",
                textAlign: "center",
                borderRadius: "10px",
                border: "rgb(56, 225, 6)",
                color: "rgb(56, 225, 6)"
            },
            transition: Bounce,
        });
    };


    return (
        <div className='contact container'>
            <section>
                <article className='infoContact'>
                    <article>
                        <h3>ENVIANOS UN CORREO</h3>
                        <div className='mailIcon'><div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-at-fill" viewBox="0 0 16 16">
                                <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2zm-2 9.8V4.698l5.803 3.546zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.5 4.5 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586zM16 9.671V4.697l-5.803 3.546.338.208A4.5 4.5 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671" />
                                <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791" />
                            </svg>
                        </div></div>
                        <strong>Te responderemos lo más rapido posible</strong>
                        <div className='contatsIcons'>
                            <div> <i className="bi bi-whatsapp"></i></div>
                            <div><i class="bi bi-facebook"></i></div>
                            <div><i class="bi bi-telephone-fill"></i></div>
                        </div>
                    </article>
                </article>

                <div className='formContact'>
                    <form ref={form} onSubmit={handleSubmit}>
                        <label>Tu nombre</label>
                        <input name="user_name" type="text" required />
                        <label>Tu correo electrónico</label>
                        <input name="user_email" type="email" required />
                        <label>Asunto</label>
                        <input type="text" name="subject" required />
                        <label>Tu mensaje (opcional)</label>
                        <textarea name="message" rows="15" required></textarea>
                        <div>
                            <button type='submit'>Enviar</button>
                        </div>
                    </form>
                </div>
            </section>

            <button className='closeContact' onClick={() => updateContactUs(!constacUs)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
                </svg>
            </button>
        </div>
    )
}


