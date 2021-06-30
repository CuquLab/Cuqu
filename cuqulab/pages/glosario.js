
import Container from '../components/container'
import CardLeftImg from '../components/cardLeftImg'
import CardRightImg from '../components/cardRightImg'

const Glosario = () => {
    return (
        <div>
            <Container>
                <h2 className='text-center mb-5'>| Glosario |</h2>
                <CardRightImg
                    title='💪🏻 La unión hace la fuerza'
                    img='/images/LaUnionHacelaFuerza.png'
                    text='¡Acá encontrarás todas las redes culturales y colectivos de CABA para poder sumarte al que quieras!'
                    href='https://www.notion.so/La-uni-n-hace-la-fuerza-0b8932fa8479494e93b0d516df84b3cd' />

                <CardLeftImg
                    title='🏛 Organismos'
                    img='/images/Organismos.png'
                    text='En esta sección nombramos los organismos involucrados en el hacer cultural. ¡Es importante que sepas qué son y para qué sirven!'
                    href='https://www.notion.so/Organismos-e6aef26accb74907804df61aaf3bd2b7' />

                <CardRightImg
                    title='🚀 Espacios Culturales'
                    img='/images/EspaciosCulturales.png'
                    text='Acá vas a encontrar un listado de espacios culturales de la Ciudad de Buenos Aires'
                    href='https://www.notion.so/Espacios-Culturales-0a6db63492294e2faea35a96ed35e451' />

                <CardLeftImg
                    title='🎖 Asociaciones Civiles'
                    img='/images/AsociacionesCiviles.png'
                    text='Acá repasamos qué información te piden habitualmente en los financiamientos y qué es cada una'
                    href='https://www.notion.so/Asociaciones-Civiles-18b2c28442ce42c5bd891b2fd4bf8e2a' />

                <CardRightImg
                    title='🧰 Protocolos contra las violencias '
                    img='/images/ProtocolosContraLasViolencias.png'
                    text='Acá encontrarás los protocolos contra las violencias de Géneros publicados'
                    href='https://www.notion.so/Protocolos-contra-las-violencias-6adabf3df5e64b259933ee5536559415' />
            </Container>
        </div>
    )
}

export default Glosario
