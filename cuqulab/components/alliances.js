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
                                <Image src='/images/LogoBrandonAlianza.png' alt='Casa Brandon alianza' width='170' height='170' />
                            </a>
                        </Link>
                    </div>
                </div>
                <div className='col-md-3 col-sm-6 col-xs-12 text-center'>
                    <div className={styles.imgAlliance}>
                        <Link href='https://www.instagram.com/explore/tags/escueladeg%C3%A9neros/'>
                            <a>
                                <Image src='/images/LogoEscuelaByMAlianza.png' alt='Escuela de géneros Brandon/Mocha' width='150' height='150' />
                            </a>
                        </Link>
                    </div>
                </div>
                <div className='col-md-3 col-sm-6 col-xs-12 text-center'>
                    <div className={styles.imgAlliance}>
                        <Link href='https://www.instagram.com/serigrafia_urgente/'>
                            <a>
                                <Image src='/images/LogoSUAlianza.png' alt='Serigrafía Urgente' width='150' height='150' />
                            </a>
                        </Link>
                    </div>
                </div>
                <div className='col-md-3 col-sm-6 col-xs-12 text-center'>
                    <div className={styles.imgAlliance}>
                        <Link href='https://www.instagram.com/mochacelis/'>
                            <a>
                                <Image src='/images/LogoMochaCelisAlianza.png' alt='Mocha Celis' width='150' height='150' />
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
                                <Image src='/images/LogoVLPAlianza.png' alt='Vuela el Pez' width='150' height='150' />
                            </a>
                        </Link>
                    </div>
                </div>

                <div className='col-md-3 col-sm-6 col-xs-12 text-center'>
                    <div className={styles.imgAlliance}>
                        <Link href='https://www.instagram.com/movimientomeca/'>
                            <a>
                                <Image src='/images/LogoMecaAlianza.png' alt='Movimiento de espacios culturales y artísticos' width='180' height='120' />
                            </a>
                        </Link>
                    </div>
                </div>
                <div className='col-md-3 col-sm-6 col-xs-12 text-center'>
                    <div className={styles.imgAlliance}>
                        <Link href='https://www.instagram.com/clicvillacrespo/'>
                            <a>
                                <Image src='/images/LogoClicAlianza.png' alt='Clic Villa Crespo' width='150' height='140' />
                            </a>
                        </Link>
                    </div>
                </div>
                <div className='col-md-3 col-sm-6 col-xs-12 text-center'>
                    <div className={styles.imgAlliance}>
                        <Link href='https://www.instagram.com/casabrandon/'>
                            <a>
                                <Image src='/images/LogoCasaBrandonAlianza.png' alt='Casa Brandon' width='150' height='120' />
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-3 col-sm-6 col-xs-12 text-center'>
                    <div className={styles.imgAlliance}>
                        <Link href='https://www.instagram.com/cuarentenoteca/'>
                            <a>
                                <Image src='/images/LogoCuarentenotecaAlianza.png' alt='Cuarentenoteca' width='150' height='150' />
                            </a>
                        </Link>
                    </div>
                </div>
                <div className='col-md-3 col-sm-6 col-xs-12 text-center'>
                    <div className={styles.imgAlliance}>
                        <Link href='https://www.instagram.com/luzuriagaclubsocial/'>
                            <a>
                                <Image src='/images/LogoLuzuriagaAlianza.png' alt='Luzuriaga club social' width='150' height='150' />
                            </a>
                        </Link>
                    </div>
                </div>
                <div className='col-md-3 col-sm-6 col-xs-12 text-center'>
                    <div className={styles.imgAlliance}>
                        <Link href='https://www.notion.so/Seminario-Federal-por-la-Inclusi-n-TTNB-ef73da5085b24a71a358a3173ef543ae'>
                            <a>
                                <Image src='/images/LogoSFIAlianza.png' alt='Seminario Federal por la Inclusión TTNB' width='150' height='150' />
                            </a>
                        </Link>
                    </div>
                </div>
                <div className='col-md-3 col-sm-6 col-xs-12 text-center'>
                    <div className={styles.imgAlliance}>
                        <Link href='https://www.instagram.com/movimientodejuventudestrans/'>
                            <a>
                                <Image src='/images/LogoMJTAlianza.png' alt='Movimiento de Juventudes Trans' width='150' height='150' />
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Alliances