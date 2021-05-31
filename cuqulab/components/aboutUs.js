import styles from '../styles/Home.module.css'

const About = () => {
    return (
        <div className={styles.aboutContainer}>
            <div className={styles.aboutImg} style={{
                backgroundImage: `url(${'/images/Home.png'})`,
            }}></div>
            <div className={styles.aboutText}>
                <h5>Quienes Somos?</h5>
                <p>Cuqu es un proyecto que asesora a artistas, activistas y a Organizaciones Sociales para potenciar el desarrollo, la sostenibilidad, el enfoque en perspectiva de géneros y el impacto social de sus proyectos culturales.
                        </p>
                <h5>Misión</h5>
                <p>Cuqu promueve el derecho al acceso a una cultura diversa e inclusiva. Surge en el contexto de la pandemia del COVID19 en 2020 ante la falta de herramientas para la sostenibilidad de los proyectos culturales de la comunidad LGTBIQ+.</p>
            </div>
        </div>
    )
}

export default About