import Image from 'next/image'
import styles from '../styles/Alliance.module.css'

const Alliances = () => {
    return (
        <div className={styles.allianceContainer}>
            <div className='row'>
                <h2 className='text-center'>Alianzas</h2>
                <hr />
                <div className={styles.thumb}>
                    <div className='col-md-6'>
                        <div >
                            <Image clasName={styles.imgAlliance} src='/images/LOGO.BRANDON.png' alt='casa brandon' width='300' height='100' />
                        </div>
                    </div>
                    <div className='col-md-6 text-center'>
                        <div className={styles.pAlliance}>
                            <p>Brandon por la Igualdad/Equidad de Derechos y Oportunidades Asociación Civil LGTBIQ+ 🏳️‍🌈 Sede social @casabrandon 💥 20 años de Cultura LGTBIQ+ 😻</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Alliances