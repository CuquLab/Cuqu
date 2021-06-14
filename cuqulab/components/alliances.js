
import GenericLogoWithLink from './genericLogoWithLink'
import styles from '../styles/Alliance.module.css'

const Alliances = () => {
    return (
        <div className={styles.allianceContainer}>
            <div className='row'>
                <h2 className='text-center'>Alianzas</h2>
            </div>
            <hr id={styles.allianceHr} />
            <div className='row'>
                <div className='col-md-3 col-sm-6 col-xs-12 text-center'>
                    <div className={styles.imgAlliance}>
                        <GenericLogoWithLink href='https://www.instagram.com/brandonporlaigualdad/' src='/images/LogoBrandon20x20.png' alt='Casa Brandon alianza' width='150' height='150' />
                    </div>
                </div>
                <div className='col-md-3 col-sm-6 col-xs-12 text-center'>
                    <div className={styles.imgAlliance}>
                        <GenericLogoWithLink href='https://www.instagram.com/explore/tags/escueladeg%C3%A9neros/' src='/images/LogoEscuelaByM20x20.png' alt='Escuela de géneros Brandon/Mocha' width='150' height='150' />
                    </div>
                </div>
                <div className='col-md-3 col-sm-6 col-xs-12 text-center'>
                    <div className={styles.imgAlliance}>
                        <GenericLogoWithLink href='https://www.instagram.com/serigrafia_urgente/' src='/images/LogoSU20x20.png' alt='Serigrafía Urgente' width='150' height='150' />
                    </div>
                </div>
                <div className='col-md-3 col-sm-6 col-xs-12 text-center'>
                    <div className={styles.imgAlliance}>
                        <GenericLogoWithLink href='https://www.instagram.com/mochacelis/' src='/images/LogoMochaCelis20x20.png' alt='Mocha Celis' width='150' height='150' />
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-3 col-sm-6 col-xs-12 text-center'>
                    <div className={styles.imgAlliance}>
                        <GenericLogoWithLink href='https://www.instagram.com/vuelaelpez/' src='/images/LogoVLP20x20.png' alt='Vuela el Pez' width='150' height='150' />
                    </div>
                </div>
                <div className='col-md-3 col-sm-6 col-xs-12 text-center'>
                    <div className={styles.imgAlliance}>
                        <GenericLogoWithLink href='https://www.instagram.com/movimientomeca/' src='/images/LogoMeca20x20.png' alt='Movimiento de espacios culturales y artísticos' width='150' height='150' />
                    </div>
                </div>
                <div className='col-md-3 col-sm-6 col-xs-12 text-center'>
                    <div className={styles.imgAlliance}>
                        <GenericLogoWithLink href='https://www.instagram.com/clicvillacrespo/' src='/images/LogoClic20x20.png' alt='Clic Villa Crespo' width='150' height='150' />
                    </div>
                </div>
                <div className='col-md-3 col-sm-6 col-xs-12 text-center'>
                    <div className={styles.imgAlliance}>
                        <GenericLogoWithLink href='https://www.instagram.com/casabrandon/' src='/images/LogoCasaBrandon20x20.png' alt='Casa Brandon' width='150' height='150' />
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-3 col-sm-6 col-xs-12 text-center'>
                    <div className={styles.imgAlliance}>
                        <GenericLogoWithLink href='https://www.instagram.com/cuarentenoteca/' src='/images/LogoCuarentenoteca20x20.png' alt='Cuarentenoteca' width='150' height='150' />
                    </div>
                </div>
                <div className='col-md-3 col-sm-6 col-xs-12 text-center'>
                    <div className={styles.imgAlliance}>
                        <GenericLogoWithLink href='https://www.instagram.com/luzuriagaclubsocial/' src='/images/LogoLuzuriaga20x20.png' alt='Luzuriaga club social' width='150' height='150' />
                    </div>
                </div>
                <div className='col-md-3 col-sm-6 col-xs-12 text-center'>
                    <div className={styles.imgAlliance}>
                        <GenericLogoWithLink href='https://www.notion.so/Seminario-Federal-por-la-Inclusi-n-TTNB-ef73da5085b24a71a358a3173ef543ae' src='/images/LogoSFI20x20.png' alt='Seminario Federal por la Inclusión TTNB' width='150' height='150' />
                    </div>
                </div>
                <div className='col-md-3 col-sm-6 col-xs-12 text-center'>
                    <div className={styles.imgAlliance}>
                        <GenericLogoWithLink href='https://www.instagram.com/movimientodejuventudestrans/' src='/images/LogoMJT20x20.png' alt='Movimiento de Juventudes Trans' width='150' height='150' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Alliances