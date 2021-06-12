import Logo from './logo'
import Link from 'next/link'
import { HouseFill } from 'react-bootstrap-icons'
import { EnvelopeFill } from 'react-bootstrap-icons'
import { Instagram } from 'react-bootstrap-icons'
import { Youtube } from 'react-bootstrap-icons'


const Footer = () => {
    return (
        <footer className='bg-light pt-5 pb-4'>
            <div className='footerContainer text-center text-md-left'>
                <div className='row text-center text-md-left'>
                    <div className='col-md-4 col-lg-4 col-xl-4 mx-auto mt-3'>
                        <h5 className='text-uppercase mb-4 font-weight-bold text-warning'>CuquLab</h5>
                        <p>ONG</p>
                        <Link href='/'>
                            <a className='my-2'><Logo /></a>
                        </Link>
                    </div>
                    <div className='col-md-4 col-lg-4 col-xl-4 mx-auto mt-3'>
                        <h5 className='text-uppercase mb-4 font-weight-bold text-warning'>Accesos rápidos</h5>
                        <p>
                            <Link href='/actividades'>
                                <a>Actividades</a>
                            </Link>
                        </p>
                        <p>
                            <Link href='/manual'>
                                <a>Descargá nuestro manual</a>
                            </Link>
                        </p>
                        <p>
                            <Link href='/alianzas'>
                                <a>Alianzas</a>
                            </Link>
                        </p>
                    </div>
                    <div className='col-md-4 col-lg-4 col-xl-4 mx-auto mt-3'>
                        <h5 className='text-uppercase mb-4 font-weight-bold text-warning'>Contacto</h5>
                        <p >
                            <HouseFill /> Ciudad Autónoma de Buenos Aires
                        </p>
                        <p>
                            <EnvelopeFill /> cuqulaboratorio@gmail.com
                        </p>
                    </div>
                </div>
                <hr className='mb-4' />
                <div className='row align-items-center'>
                    <div className='col-md-7 col-lg-8'>
                        <p>Copyright © 2021 Todos los derechos reservados por:
                                <strong className='text-warning'> CuquLab</strong>
                        </p>
                    </div>
                    <div className='col-md-5 col-lg-4'>
                        <div className='text-center text-md-right'>
                            <ul className='list-unstyled list-inline'>
                                <li className='list-inline-item'>
                                    <Link href='https://www.instagram.com/cuqulab/'>
                                        <a className='btn-lg'><Instagram />
                                        </a>
                                    </Link>
                                </li>
                                <li className='list-inline-item'>
                                    <Link href='https://www.youtube.com/channel/UCHXEGRo3nDSxRpob4Ve8Mqw'>
                                        <a className='btn-lg'><Youtube />
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer