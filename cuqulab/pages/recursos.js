import Container from '../components/container'
import CardLeftImg from '../components/cardLeftImg'
import CardRightImg from '../components/cardRightImg'

export default function Resources() {
    return (
        <div>
            <Container>
                <h2 className='text-center mb-5'>| Recursos |</h2>
                <CardLeftImg title=' 🥁 Recomendaciones Generales' img='/images/RecomendacionesGenerales.png' text='Aquí encontrarás recomendaciones generales para el armado de tus proyectos.' href='https://www.notion.so/Recomendaciones-generales-e6c36cda3c9d4c29b82e6540ecf15c34' />
                <br></br>
                <br></br>
                <CardRightImg title='🧰 Financiamientos' img='/images/Finaciamientos.png' text='Aquí encontrarás una guía general de los financiamientos nacionales e internacionales más conocidos.' href='https://www.notion.so/Financiamientos-ada3bc49c68742db8cc44791fb300796' />
                <br></br>
                <br></br>
                <CardLeftImg title='🌷 Herramientas ' img='/images/HerramientasUtiles.jpg' text='Aquí encontrarás herramientas para mejorar tu gestión de proyectos.' href='https://www.notion.so/Herramientas-2114cd1c2e4346b896831506d33dd9a4' />
            </Container>
        </div>
    )
}