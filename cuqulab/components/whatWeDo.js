import styles from '../styles/WhatWeDo.module.css'

const WhatWeDo = () => {
    return (
        <div className={styles.weDoContainer}>
            <h2 className={styles.weDoTitle}>Que Hacemos?</h2>
            <div className={styles.cardContainer}>
                < div class="col-sm-4 text-center h-100">
                    <img src="/images/Desarrollo.png" className={styles.weDoImg} alt="LogoDesarrollo"></img>
                    <div className="card-body">
                        <h5 className="card-title">Desarrollo y gestion de proyectos culturales</h5>
                        <p className="card-text">Diseño y presentación de proyectos a fondos nacionales, locales e internacionales.</p>
                        {/* <p className="card-text"><small className="text-muted">Gratuito</small></p> */}
                    </div>
                </div>
                <div class="col-sm-4 text-center h-100">
                    <img src="/images/Asesorias.png" className={styles.weDoImg} alt="LogoAsesorias"></img>
                    <h5 className="card-title">Asesorias</h5>
                    <p className="card-text">Acompañamiento para definir las estrategias de financiamiento, consejos para llegar de la idea al proyecto, lectura y corrección de proyectos ya armados, etc.</p>
                    {/* <p className="card-text"><small className="text-muted">Gratuito</small></p> */}
                </div>
                <div class="col-sm-4 text-center h-100">
                    <img src="/images/Talleres.png" className={styles.weDoImg} alt="LogoTalleres"></img>
                    <div className="card-body">
                        <h5 className="card-title">Talleres</h5>
                        <p className="card-text">Nociones de gestión cultural, como presentar fondos específicos, herramientas digitales, tips de organización personal, etc.</p>
                        {/* <p className="card-text"><small className="text-muted">Gratuito</small></p> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhatWeDo