import Container from '../components/container'
import { Instagram, EnvelopeFill, Youtube } from 'react-bootstrap-icons'
import Link from 'next/link'
import styles from '../styles/Contact.module.css'


const Contacto = () => {

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
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor='mail' className='form-label'><big>Correo electrónico * </big><span><small> (obligatorio)</small></span></label>
                                    <input type='text' className='form-control' name='email' id='mail' placeholder='Ej: daniela@gmail.com' required />
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor='phone' className='form-label'><big>Teléfono </big><span><small> (opcional)</small></span></label>
                                    <input type='tel' className='form-control' name='phone' id='phone' placeholder='Código de país + Código de área + Número' />
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor='coments' className='form-label'><big>Mensaje * </big><span><small> (obligatorio)</small></span></label>
                                    <textarea className='form-control' name='comments' id='comments' rows='5' placeholder='Escribí acá tu consulta' required></textarea>
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