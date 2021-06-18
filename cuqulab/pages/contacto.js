import Container from '../components/container'
import { HouseFill, Instagram, EnvelopeFill, Youtube } from 'react-bootstrap-icons'
import Link from 'next/link'
import styles from '../styles/Contact.module.css'

const Contacto = () => {
    return (
        <div>
            <Container>
                <h2 className='text-center mb-1' id={styles.contactTitle}>| Contacto |</h2>
                <div className='container'>
                    <div className='row w-100vh d-flex justify-content-center align-items-center mb-5'>
                        <div className='col-4'>
                            <div className={styles.contactHeader}>
                                <img src='/images/CuquLabLogo.png' className='img-fluid' alt='CuquLab logo' />
                            </div>
                        </div>
                    </div>
                    <div className='row' id={styles.contactDataContainer}>
                        <div className='col-12 col-lg-5  data-container'>
                            <div className='row mt-2 mb-5 align-items-center'>
                                <div className='col-12 text-center col-lg-2  contact-data-icon'><HouseFill size={30} /></div>
                                <div className='col-12 col-lg-8 text-center text-lg-left  contact-data pt-1'>
                                    <p className='pb-1 m-0' style={{ fontWeight: 900, textDecorationLine: 'underline overline', textDecorationColor: '#ff3300' }}>CuquLab</p>
                                    <p className='p-0 m-0'><b>Ciudad Autónoma de Buenos Aires. Provincia de Buenos Aires, Argentina</b></p>
                                </div>
                            </div>
                            <div className='row mt-4 mb-5 align-items-center'>
                                <div className='col-12 text-center col-lg-2 contact-data-icon'><Instagram size={30} /></div>
                                <div className='col-12 col-lg-8 text-center text-lg-left contact-data pt-1'>
                                    <p className='pb-1 m-0' style={{ fontWeight: 900, textDecorationLine: 'underline overline', textDecorationColor: '#ff3300' }}>CuquLab Instagram</p>
                                    <Link href='https://www.instagram.com/cuqulab/'>
                                        <a>
                                            <p className='p-0 m-0'><b>https://www.instagram.com/cuqulab/</b></p>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            <div className='row mt-4 mb-5 align-items-center'>
                                <div className='col-12 text-center col-lg-2 contact-data-icon'><EnvelopeFill size={30} /></div>
                                <div className='col-12 col-lg-8 text-center text-lg-left  contact-data pt-2'>
                                    <p className='pb-1 m-0' style={{ fontWeight: 900, textDecorationLine: 'underline overline', textDecorationColor: '#ff3300' }}>CuquLab Email</p>
                                    <Link href='mailto:cuqulaboratorio@gmail.com'>
                                        <a>
                                            <p className='p-0 m-0'><b>cuqulaboratorio@gmail.com</b></p>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            <div className='row mt-4 mb-5 align-items-center'>
                                <div className='col-12 text-center col-lg-2 contact-data-icon'><Youtube size={30} /></div>
                                <div className='col-12 col-lg-8 text-center text-lg-left  contact-data pt-2'>
                                    <p className='pb-1 m-0' style={{ fontWeight: 900, textDecorationLine: 'underline overline', textDecorationColor: '#ff3300' }}>CuquLab canal de Youtube</p>
                                    <Link href='https://www.youtube.com/channel/UCHXEGRo3nDSxRpob4Ve8Mqw'>
                                        <a>
                                            <p className='p-0 m-0'><b>https://www.youtube.com/channel/UCHXEGRo3nDSxRpob4Ve8Mqw</b></p>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            <div className='row mt-4 mb-5 align-items-center'>
                                <div className='col-12 text-center col-lg-2 contact-data-icon'><img src='/images/NotionIcon48.png' width='35' height='35' id={styles.iconImgNotion} /></div>
                                <div className='col-12 col-lg-8 text-center text-lg-left  contact-data pt-2'>
                                    <p className='pb-1 m-0' style={{ fontWeight: 900, textDecorationLine: 'underline overline', textDecorationColor: '#ff3300' }}>CuquLab Notion</p>
                                    <Link href='https://www.notion.so/2ed71c2b719d402ea25825b44abd0721'>
                                        <a>
                                            <p className='p-0 m-0'><b>https://www.notion.so/2ed71c2b719d402ea25825b44abd0721</b></p>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-lg-7 mt-4 mt-lg-0 contact-form mb-1 align-items-center' id={styles.contactDataContainer}>
                            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdeNODAmuAzCdStH7Ec85xrYDWodJHSLuh772xkp7rXx-HZlA/viewform?embedded=true" width="100%" height="960" frameBorder="0" marginHeight="0" marginWidth="0">Cargando…</iframe>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Contacto