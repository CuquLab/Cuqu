import Container from '../components/container'
import { useForm } from "react-hook-form"
import { Alert } from 'react-bootstrap'
import { Instagram, EnvelopeFill, Youtube } from 'react-bootstrap-icons'
import Link from 'next/link'
// import emailjs from 'emailjs-com'
// import dynamic from 'next/dynamic'
import styles from '../styles/Contact.module.css'
// import 'bootstrap/dist/css/bootstrap.min.css';



const Contacto = () => {


    // const emailjs = dynamic(import('@emailjs-com'), { ssr: false })

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     emailjs.sendForm('gmailMessage', 'template_k8f0zaf', e.target, 'user_kXWOl1pXL7MDEzgidNQVI')
    //         .then((result) => {
    //             console.log(result.text);
    //             <Alert variant="success">
    //                 'Mensaje enviado exitosamente! Te contactaremos a la brevedad'
    //             </Alert>
    //         }, (error) => {
    //             console.log(error.text);
    //             <Alert variant="success">
    //                 'Ha ocurrido un error. Por favor, reintenta nuevamente'
    //             </Alert>
    //             // alert('Ha ocurrido un error. Por favor, reintenta nuevamente')
    //         });
    //     e.target.reset();
    // };
    // const { register, errors } = useForm();

    // const onSubmit = formData => {
    //     alert(JSON.stringify(formData))
    // }

    return (
        <Container>
            <h2 className='text-center mb-1'>| Contacto |</h2>
            <div className='container' id={styles.contactContainer}>
                <div className='row w-100vh d-flex justify-content-center align-items-center mt-5'>
                    <div className='col-lg-4 mt-0'>
                        <div className={styles.contactHeader}>
                            <img src='/images/CuquLabLogo.png' className='img-fluid mx-auto d-block' alt='CuquLab logo' />
                        </div>
                        <div className='row mt-4 mb-2 justify-content-center align-items-center'>
                            <div className='col-12 col-lg-8 text-center pt-1'>
                                <Link href='https://www.instagram.com/cuqulab/'>
                                    <a>
                                        <Instagram size={30} />
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className='row mt-4 mb-2 justify-content-center align-items-center'>
                            <div className='col-12 col-lg-8 text-center pt-1'>
                                <Link href='mailto:cuqulaboratorio@gmail.com'>
                                    <a>
                                        <EnvelopeFill size={30} />
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className='row mt-4 mb-2 justify-content-center align-items-center'>
                            <div className='col-12 col-lg-8 text-center pt-1'>
                                <Link href='https://www.youtube.com/channel/UCHXEGRo3nDSxRpob4Ve8Mqw'>
                                    <a>
                                        <Youtube size={30} />
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className='row mt-4 mb-2 justify-content-center align-items-center'>
                            <div className='col-12 col-lg-8 text-center pt-1'>
                                <Link href='https://www.notion.so/2ed71c2b719d402ea25825b44abd0721'>
                                    <a>
                                        <img src='/images/NotionIcon48.png' width='35' height='35' id={styles.iconImgNotion} />
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-lg-7 mt-5 gx-5 contact-form mb-4'>
                        <div className={styles.form}>
                            <form onSubmit={''}>
                                <h4 className='text-center mt-3 mb-3'>Podés contactarte con nosotres completando el siguiente formulario:</h4>
                                <div className='mb-3'>
                                    <label htmlFor='name' className='form-label'><big>Nombre * </big><span><small> (obligatorio)</small></span></label>
                                    <input type='text' className='form-control' name='name' id='name' placeholder='Ej: Daniela' required />
                                    {/* {errors.name &&
                                        // if errors then display alert
                                        <Alert variant="danger">
        // if name error type is "required" display following message
                                            {errors.name?.type === "required" && <p>Ingresá tu nombre</p>}
        // if name error type is "maxLength" display following message
                                            {errors.name?.type === "maxLength" && <p>El máximo de caracteres permitidos es de 20</p>}
                                        </Alert>
                                    } */}
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor='mail' className='form-label'><big>Correo electrónico * </big><span><small> (obligatorio)</small></span></label>
                                    <input type='text' className='form-control' name='email' id='mail' placeholder='Ej: daniela@gmail.com' required />
                                    {/* {errors.email &&
                                        <Alert variant="danger">
                                            {errors.email?.type === "required" && <p>Ingresá tu email</p>}
                                            {errors.email?.type === "pattern" && <p>Ingresá un email válido</p>}
                                        </Alert>
                                    } */}
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor='phone' className='form-label'><big>Teléfono </big><span><small> (opcional)</small></span></label>
                                    <input type='tel' className='form-control' name='phone' id='phone' placeholder='Código de país + Código de área + Número' />
                                    {/* {errors.phone &&
                                        <Alert variant="danger">
                                            {errors.phone?.type === "pattern" && <p>Ingresá un número de teléfono válido</p>}
                                        </Alert>
                                    } */}
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor='coments' className='form-label'><big>Mensaje * </big><span><small> (obligatorio)</small></span></label>
                                    <textarea className='form-control' name='comments' id='comments' rows='5' placeholder='Escribí acá tu consulta' required></textarea>
                                    {/* {errors.comments &&
                                        <Alert variant="danger">
                                            {errors.comments?.type === "required" && <p>Dejanos tu mensaje</p>}
                                            {errors.comments?.type === "maxLength" && <p>Máximo permitido: 200 caracteres</p>}
                                        </Alert>
                                    } */}
                                </div>
                                <button type='submit' className='btn mt-3' id={styles.formSubmitBtn}>Enviar</button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Contacto