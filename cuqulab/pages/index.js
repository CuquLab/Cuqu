import About from '../components/aboutUs'
import Container from '../components/container'
import WeDo from '../components/whatWeDo'

export default function Home() {
  return (
    <div>
      <Container>
        <About />
        <WeDo />
      </Container>
    </div>
  )
}
