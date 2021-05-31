
// import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";
import Link from 'next/link'
import Logo from '../components/logo'
// import 'bootstrap/dist/css/bootstrap.min.css'

const Navigation = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <div className='container-fluid'>
                <Link href='/'>
                    <a className='navbar-brand'><Logo /></a>
                </Link>
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarNav'>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <Link href='/' activeClassName='active'>
                                <a className='nav-link' aria-current='page'>Inicio</a>
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link href='/glosario' activeClassName='active'>
                                <a className='nav-link'>Glosario</a>
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link href='/recursos' activeClassName='active'>
                                <a className='nav-link'>Recursos</a>
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link href='/blog' activeClassName='active'>
                                <a className='nav-link'>Blog</a>
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link href='/contacto' activeClassName='active'>
                                <a className='nav-link'>Contacto</a>
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link href='/colabora' activeClassName='active'>
                                <a className='nav-link'>Colabora</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}


export default Navigation