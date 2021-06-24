import About from '../components/aboutUs'
import Alianzas from '../components/alliances'
import Container from '../components/container'
import WhatWeDo from '../components/whatWeDo'
// import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <div>
      <Container>
        <About />
        <WhatWeDo />
        <Alianzas />
      </Container>
    </div>
  )
}
