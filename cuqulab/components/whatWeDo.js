import styles from '../styles/WeDo.module.css'

const WeDo = () => {
    return (
        <div className={styles.weDoContainer}>
            <h2 className={styles.weDoTitle}>Que Hacemos?</h2>
            <div class="row" style={{ height: "50vh" }}>
                < div class="col-sm-4 text-center h-100">
                    <img src="/images/Desarrollo.png" className={styles.weDoImg} alt="LogoDesarrollo"></img>
                    <div className="card-body">
                        <h5 className="card-title">Desarrollo y Gestion de Proyectos</h5>
                        <p className="card-text">Diseño y presentación de proyectos a fondos nacionales y locales.</p>
                        <p className="card-text"><small className="text-muted">Gratuito</small></p>
                    </div>
                </div>
                <div class="col-sm-4 text-center h-100">
                    <img src="/images/Asesorias.png" className={styles.weDoImg} alt="LogoAsesorias"></img>
                    <h5 className="card-title">Asesorias</h5>
                    <p className="card-text">Acompañamiento para definir la estrategia de financiamiento, consejos para llegar de la idea al proyecto, etc .</p>
                    <p className="card-text"><small className="text-muted">Gratuito</small></p>
                </div>
                <div class="col-sm-4 text-center h-100">
                    <img src="/images/Talleres.png" className={styles.weDoImg} alt="LogoTalleres"></img>
                    <div className="card-body">
                        <h5 className="card-title">Talleres</h5>
                        <p className="card-text">Gestion cultural, Herramientas digitales, tips de organización personal, etc.</p>
                        <p className="card-text"><small className="text-muted">Gratuito</small></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeDo