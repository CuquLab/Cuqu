import Container from '../components/container'
import styles from '../styles/Contact.module.css'
import { PinMapFill, TelephoneFill, EnvelopeFill } from 'react-bootstrap-icons'

const Contacto = () => {
    return (
        <div>
            <Container>
                <div className={styles.contactHeader}>FOTO</div>
                <div className={styles.contactContainer}>
                    <div className={styles.contactLinks}>
                        <div className="row align-items-center mb-5">
                            <div className="col-12 text-center col-lg-2">
                                <PinMapFill color="rgb(241, 90, 41)" size={50} />
                            </div>
                            <div className="col-12 text-center col-lg-8 text-lg-left">
                                <p className="pb-1 m-0">
                                    <b>Cuqu Lab</b>
                                </p>
                                <p className="p-0 m-0">
                                    Calle numero 123
                                    CABA C.P. 1439 Buenos Aires
                                    Argentina
                                </p>
                            </div>
                        </div>
                        <div className="row align-items-center mb-5">
                            <div className="col-12 text-center col-lg-2">
                                <TelephoneFill color="rgb(241, 90, 41)" size={50} />
                            </div>
                            <div className="col-12 text-center col-lg-8 text-lg-left">
                                <p className="pb-1 m-0">
                                    <b>Cuqu Lab</b>
                                </p>
                                <p className="p-0 m-0">
                                    Calle numero 123
                                    CABA C.P. 1439 Buenos Aires
                                    Argentina
                                </p>
                            </div>
                        </div>
                        <div className="row align-items-center mb-5">
                            <div className="col-12 text-center col-lg-2">
                                <EnvelopeFill color="rgb(241, 90, 41)" size={50} />
                            </div>
                            <div className="col-12 text-center col-lg-8 text-lg-left">
                                <p className="pb-1 m-0">
                                    <b>Cuqu Lab</b>
                                </p>
                                <p className="p-0 m-0">
                                    Calle numero 123
                                    CABA C.P. 1439 Buenos Aires
                                    Argentina
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.contactForm}>

                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Contacto