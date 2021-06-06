import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Alliance.module.css'

const Alliances = () => {
    return (
        <div className={styles.allianceContainer}>
            <div className='row'>
                <h2 className='text-center'>Alianzas</h2>
            </div>
            <hr />
            <div className='row'>
                <div className='col-md-3 col-sm-6 col-xs-12 text-center'>
                    <div className={styles.imgAlliance}>
                        <Link href='https://www.instagram.com/brandonporlaigualdad/'>
                            <a >
                                <Image src='/images/logobrandonalianza.png' alt='Casa Brandon alianza' width='200' height='200' />
                            </a>
                        </Link>
                    </div>
                </div>
                <div className='col-md-3 col-sm-6 col-xs-12 text-center'>
                    <div className={styles.imgAlliance}>
                        <Link href='https://www.instagram.com/luzuriagaclubsocial/'>
                            <a>
                                <Image src='/images/logoluzuriagaalianza.png' alt='Luzuriaga club social' width='150' height='150' />
                            </a>
                        </Link>
                    </div>
                </div>
                <div className='col-md-3 col-sm-6 col-xs-12 text-center'>
                    <div className={styles.imgAlliance}>
                        <Link href='https://www.instagram.com/movimientodejuventudestrans/'>
                            <a>
                                <Image src='/images/logomjtalianza.png' alt='Movimiento de Juventudes Trans' width='150' height='150' />
                            </a>
                        </Link>
                    </div>
                </div>
                <div className='col-md-3 col-sm-6 col-xs-12 text-center'>
                    <div className={styles.imgAlliance}>
                        <Link href='https://www.instagram.com/mochacelis/'>
                            <a>
                                <Image src='/images/logomochacelisalianza.png' alt='Mocha Celis' width='200' height='200' />
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-3 col-sm-6 col-xs-12 text-center'>
                    <div className={styles.imgAlliance}>
                        <Link href='https://www.instagram.com/vuelaelpez/'>
                            <a>
                                <Image src='/images/logovlpalianza.png' alt='Vuela el Pez' width='150' height='150' />
                            </a>
                        </Link>
                    </div>
                </div>

                <div className='col-md-3 col-sm-6 col-xs-12 text-center'>
                    <div className={styles.imgAlliance}>
                        <Link href='https://www.instagram.com/movimientomeca/'>
                            <a>
                                <Image src='/images/logomecaalianza.png' alt='movimiento de espacios culturales y artísticos' width='150' height='150' />
                            </a>
                        </Link>
                    </div>
                </div>
                <div className='col-md-3 col-sm-6 col-xs-12 text-center'>
                    <div className={styles.imgAlliance}>
                        <Link href='https://www.instagram.com/clicvillacrespo/'>
                            <a>
                                <Image src='/images/logoclicalianza.png' alt='Clic Villa Crespo' width='150' height='150' />
                            </a>
                        </Link>
                    </div>
                </div>
                <div className='col-md-3 col-sm-6 col-xs-12 text-center'>
                    <div className={styles.imgAlliance}>
                        <Link href='https://www.instagram.com/casabrandon/'>
                            <a>
                                <Image src='/images/logocasabrandon.png' alt='Casa Brandon' width='150' height='150' />
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Alliances