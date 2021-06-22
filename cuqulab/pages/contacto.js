import Container from '../components/container'
import { HouseFill, Instagram, EnvelopeFill, Youtube } from 'react-bootstrap-icons'
import Link from 'next/link'
// import emailjs from 'emailjs-com'
import styles from '../styles/Contact.module.css'

const Contacto = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('gmailMessage', 'template_k8f0zaf', e.target, 'user_kXWOl1pXL7MDEzgidNQVI')
            .then((result) => {
                console.log(result.text);
                alert('Mensaje enviado exitosamente!')
            }, (error) => {
                console.log(error.text);
                alert('Ha ocurrido un error. Por favor, reintenta nuevamente')
            });

        e.target.reset();
    };

    return (
        <Container>
            <h2 className='text-center mb-1'>| Contacto |</h2>
            <div className='container' id={styles.contactContainer}>
                <div className='row w-100vh d-flex justify-content-center align-items-center mt-5'>
                    <div className='col-lg-4 mt-0'>
                        <div className={styles.contactHeader}>
                            <img src='/images/CuquLabLogo.png' classNameName='img-fluid mx-auto d-block' alt='CuquLab logo' />
                        </div>
                        <div className='row mt-0 mb-2 justify-content-center align-items-center'>
                            <div className='col-12 col-lg-8 text-center pt-1'>
                                <p className='pb-1 m-0' style={{ fontSize: '16px', fontWeight: 600 }}>CuquLab</p>
                                <HouseFill size={30} />
                                <p className='p-0 m-0' style={{ fontSize: '15px' }}>Ciudad Autónoma de Buenos Aires. Provincia de Buenos Aires, Argentina</p>
                            </div>
                        </div>
                        <div className='row mt-4 mb-2 justify-content-center align-items-center'>
                            <div className='col-12 col-lg-8 text-center pt-1'>
                                <p className='pb-1 m-0' style={{ fontSize: '15px', fontWeight: 600 }}>CuquLab Instagram</p>
                                <Link href='https://www.instagram.com/cuqulab/'>
                                    <a>
                                        <Instagram size={30} />
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className='row mt-4 mb-2 justify-content-center align-items-center'>
                            <div className='col-12 col-lg-8 text-center pt-1'>
                                <p className='pb-1 m-0' style={{ fontSize: '15px', fontWeight: 600 }}>CuquLab Email</p>
                                <Link href='mailto:cuqulaboratorio@gmail.com'>
                                    <a>
                                        <EnvelopeFill size={30} />
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className='row mt-4 mb-2 justify-content-center align-items-center'>
                            <div className='col-12 col-lg-8 text-center pt-1'>
                                <p className='pb-1 m-0' style={{ fontSize: '15px', fontWeight: 600 }}>CuquLab canal de Youtube</p>
                                <Link href='https://www.youtube.com/channel/UCHXEGRo3nDSxRpob4Ve8Mqw'>
                                    <a>
                                        <Youtube size={30} />
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className='row mt-4 mb-2 justify-content-center align-items-center'>
                            <div className='col-12 col-lg-8 text-center pt-1'>
                                <p className='pb-1 m-0' style={{ fontSize: '15px', fontWeight: 600 }}>CuquLab Notion</p>
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
                            <form onSubmit={handleSubmit}>
                                <h5 className='text-center mt-3 mb-3'>Podés contactarte con nosotres completando el siguiente formulario:</h5>
                                <div className='mb-3'>
                                    <label htmlFor='name' className='form-label'><big>Nombre * </big><span><small> (obligatorio)</small></span></label>
                                    <input type='text' className='form-control' name='name' id='name' required></input>
                                </div>
                                <div classNameName='mb-3'>
                                    <label htmlFor='mail' className='form-label'><big>Correo electrónico * </big><span><small> (obligatorio)</small></span></label>
                                    <input type='text' className='form-control' name='email' id='mail' required></input>
                                </div>
                                <div classNameName='mb-3'>
                                    <label htmlFor='phone' className='form-label'><big>Teléfono </big><span><small> (opcional)</small></span></label>
                                    <input type='text' className='form-control' name='phone' id='phone'></input>
                                </div>
                                <div classNameName='mb-3'>
                                    <label htmlFor='coments' className='form-label'><big>Mensaje * </big><span><small> (obligatorio)</small></span></label>
                                    <textarea className='form-control' name='coments' id='coments' rows='4' required></textarea>
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