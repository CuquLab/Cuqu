
import Logo from '../components/logo'
import ActiveLink from './activeLink.'
import styles from '../styles/Nav.module.css'

const Navigation = () => {

    return (
        <div id={styles.nav}>
            <nav className='navbar navbar-expand-lg navbar-light bg-light '>
                <div className='container-fluid px-5'>
                    <div className='navbar-brand'>
                        <Logo />
                    </div>
                    <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
                        <i className='navbar-toggler-icon'></i>
                    </button>
                    <div className='collapse navbar-collapse p-3 justify-content-end' id='navbarNav'>
                        <ul className='navbar-nav d-flex align-items-center justify-content-center'>
                            <li className={styles.span}>
                                <ActiveLink href='/' className='active'>
                                    <span >Inicio</span>
                                </ActiveLink>
                            </li>
                            <li className={styles.span}>
                                <ActiveLink href='/glosario' className='active'>
                                    <span>Glosario</span>
                                </ActiveLink>
                            </li>
                            <li className={styles.span}>
                                <ActiveLink href='/recursos' className='active'>
                                    <span>Recursos</span>
                                </ActiveLink>
                            </li>
                            <li className={styles.span}>
                                <ActiveLink href='/contacto' className='active'>
                                    <span>Contacto</span>
                                </ActiveLink>
                            </li>
                            <li className='nav-item' id={styles.collaborate}>
                                <ActiveLink href='https://www.mercadopago.com.ar/checkout/v1/redirect?preference-id=32556454-115e8741-45be-430d-9067-d2b4935638c9' activeClassName='active'>
                                    <span className={styles.navItemCollaborate}>Colaborá</span>
                                </ActiveLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navigation