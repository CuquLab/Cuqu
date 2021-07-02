import styles from '../styles/WhatWeDo.module.css'

const WhatWeDo = () => {
    return (
        <div className={styles.weDoContainer}>
            <h2 className={styles.weDoTitle}>¿Qué hacemos?</h2>
            <div className={styles.cardContainer}>
                < div className="col-sm-4 text-center h-100">
                    <img src="/images/Desarrollo.png" className={styles.weDoImg} alt="LogoDesarrollo"></img>
                    <div className={styles.weDoCardBody}>
                        <div className={styles.weDoCardTitle}>
                            <h5>Proyectos</h5>
                        </div>
                        <div className={styles.weDoCardText}>
                            <p>Diseño, desarrollo, gestión y presentación de proyectos a fondos nacionales, locales e internacionales.</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4 text-center h-100">
                    <img src="/images/Asesorias.png" className={styles.weDoImg} alt="LogoAsesorias"></img>
                    <div className={styles.weDoCardBody}>
                        <div className={styles.weDoCardTitle}>
                            <h5>Asesorías</h5>
                        </div>
                        <div className={styles.weDoCardText}>
                            <p>Acompañamiento para definir estrategias de financiamiento, consejos para llegar de la idea al proyecto, corrección de proyectos armados, etc.</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4 text-center h-100">
                    <img src="/images/Talleres.png" className={styles.weDoImg} alt="LogoTalleres"></img>
                    <div className={styles.weDoCardBody}>
                        <div className={styles.weDoCardTitle}>
                            <h5>Talleres</h5>
                        </div>
                        <div className={styles.weDoCardText}>
                            <p>Nociones de gestión cultural, cómo presentar a fondos específicos, herramientas digitales, tips de organización personal, etc.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhatWeDo
