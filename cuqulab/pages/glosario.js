
import Container from '../components/container'
import CardLeftImg from '../components/cardLeftImg'
import CardRightImg from '../components/cardRightImg'

const Glosario = () => {
    return (
        <div>
            <Container>
                <h2 className='text-center mb-5'>| Glosario |</h2>
                <CardRightImg title='💪🏻 La unión hace la fuerza' img='/images/LaUnionHacelaFuerza.png' text='¡Acá encontrarás todas las redes culturales y colectivos de CABA para poder sumarte al que quieras!' href='https://www.notion.so/Glosario-2fb32dc90bb34909b486cbd55263a4a5' />
                <CardLeftImg title='🏛 Organismos' img='/images/Organismos.png' text='En esta sección nombramos los organismos involucrados en el hacer cultural. ¡Es importante que sepas qué son y para qué sirven!' href='https://www.notion.so/Glosario-2fb32dc90bb34909b486cbd55263a4a5' />
                <CardRightImg title='🚀 Espacios Culturales' img='/images/EspaciosCulturales.png' href='https://www.notion.so/Glosario-2fb32dc90bb34909b486cbd55263a4a5' />
                <CardLeftImg title='🎖 Asociaciones Civiles' img='/images/AsociacionesCiviles.png' text='Acá repasamos qué información te piden habitualmente en los financiamientos y qué es cada una (en construcción)' href='https://www.notion.so/Glosario-2fb32dc90bb34909b486cbd55263a4a5' />
                <CardRightImg title='🧰 Protocolos contra las violencias ' img='/images/ProtocolosContraLasViolencias.png' text='Acá encontrarás los protocolos contra las violencias de Géneros publicados (en construcción)' href='https://www.notion.so/Glosario-2fb32dc90bb34909b486cbd55263a4a5' />
            </Container>
        </div>
    )
}

export default Glosario
