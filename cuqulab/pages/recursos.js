import Container from '../components/container'
import CardLeftImg from '../components/cardLeftImg'
import CardRightImg from '../components/cardRightImg'

export default function Resources() {
    return (
        <div>
            <Container>
                <h2 className='text-center mb-5'>| Recursos |</h2>
                <CardLeftImg title=' 🥁 Recomendaciones Generales' img='/images/RecomendacionesGenerales.png' text='' href='https://www.notion.so/Recursos-18f1d7e1420a44ae8964af920d91d4f7' />
                <br></br>
                <br></br>
                <CardRightImg title='🧰 Financiamientos' img='/images/Finaciamientos.png' href='https://www.notion.so/Recursos-18f1d7e1420a44ae8964af920d91d4f7' />
                <br></br>
                <br></br>
                <CardLeftImg title='🌷 Herramientas ' img='/images/HerramientasUtiles.jpg' text='' href='https://www.notion.so/Recursos-18f1d7e1420a44ae8964af920d91d4f7' />
            </Container>
        </div>
    )
}