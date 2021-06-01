
import Link from 'next/link'
import Logo from '../components/logo'
import styles from '../styles/Nav.module.css'

const Navigation = () => {
    return (
        <div id={styles.nav}>
            <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                <div className='container-fluid px-5'>
                    <div className='navbar-brand'>
                        <Logo />
                    </div>
                    <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className='collapse navbar-collapse p-3 justify-content-end' id='navbarNav'>
                        <ul className='navbar-nav' >
                            <li className='nav-item'>
                                <Link href='/' activeClassName='active'>
                                    <a className='nav-link text-center text-uppercase' aria-current='page'>Inicio</a>
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link href='/glosario' activeClassName='active'>
                                    <a className='nav-link text-center text-uppercase'>Glosario</a>
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link href='/recursos' activeClassName='active'>
                                    <a className='nav-link text-center text-uppercase'>Recursos</a>
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link href='/blog' activeClassName='active'>
                                    <a className='nav-link text-center text-uppercase'>Blog</a>
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link href='/contacto' activeClassName='active'>
                                    <a className='nav-link text-center text-uppercase'>Contacto</a>
                                </Link>
                            </li>
                            <li className='nav-item' id={styles.collaborate}>
                                <Link href='https://www.mercadopago.com.ar/checkout/v1/redirect?preference-id=32556454-115e8741-45be-430d-9067-d2b4935638c9' activeClassName='active'>
                                    <a className='nav-link text-center text-white text-uppercase'>Colaborá</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navigation