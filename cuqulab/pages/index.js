import About from '../components/aboutUs'
import Alianzas from '../components/alliances'
import Container from '../components/container'
import WeDo from '../components/whatWeDo'

export default function Home() {
  return (
    <div>
      <Container>
        <About />
        <WeDo />
        <Alianzas />
      </Container>
    </div>
  )
}
