import Image from 'next/image'
import Link from 'next/link'
import { Instagram } from 'react-bootstrap-icons'
import { Globe } from 'react-bootstrap-icons'
import styles from '../styles/Alliance.module.css'

const Alliances = () => {
    return (
        <div className={styles.allianceContainer}>
            <div className='row'>
                <h2 className='animate__animated animate__bounce text-center'>Alianzas</h2>
                <hr />
                <div className={styles.thumb}>
                    <div className='col-md-6'>
                        <div clasName={styles.imgAlliance}>
                            <Image className='animate__animated animate__fadeInDown animate__delay-2s' src='/images/LOGO.BRANDON.png' alt='casa brandon' width='300' height='100' />
                        </div>
                    </div>
                    <div className='col-md-6 text-center'>
                        <div className={styles.pAlliance}>
                            <p className='animate__animated animate__fadeInRight animate__delay-2s'>Brandon por la Igualdad/Equidad de Derechos y Oportunidades Asociación Civil LGTBIQ+ 🏳️‍🌈 Sede social @casabrandon 💥 20 años de Cultura LGTBIQ+ 😻</p>
                        </div>
                        <ul className='list-unstyled list-inline'>
                            <li className='list-inline-item'>
                                <Link href='https://www.instagram.com/brandonporlaigualdad/'>
                                    <a className='btn-lg'><Instagram />
                                    </a>
                                </Link>
                            </li>
                            <li className='list-inline-item'>
                                <Link href='http://brandon.org.ar/'>
                                    <a className='btn-lg'><Globe />
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Alliances