import styles from '../styles/AboutUs.module.css'

const About = () => {
    return (
        <div className={styles.aboutContainer}>
            <div className={styles.aboutImg} style={{
                backgroundImage: `url(${'/images/HomeTransparente.png'})`,
            }}></div>
            <div className={styles.aboutText}>
                <h5>¿Quiénes somos?</h5>
                <p>Cuqu es un proyecto que asesora a artistas, activistas y a organizaciones sociales para potenciar el desarrollo, la sostenibilidad, el enfoque en perspectiva de géneros y el impacto social de sus proyectos culturales.</p>
                <h5>Misión</h5>
                <p>Cuqu promueve el derecho al acceso a una cultura diversa e inclusiva. Surge en el contexto de la pandemia del COVID19 en 2020 ante la falta de herramientas para la sostenibilidad de los proyectos culturales de la comunidad LGTBIQ+.</p>
                <div className={styles.aboutLink}>
                    <a target="blank" href="https://drive.google.com/drive/folders/1Pv_1DKlnK0ajV2p4YH6OtXk1Tcotz4vr">Descarga nuestro Manual</a>
                </div>
            </div>
        </div>
    )
}

export default About