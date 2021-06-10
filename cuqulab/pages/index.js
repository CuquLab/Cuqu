import About from '../components/aboutUs'
import Alianzas from '../components/alliances'
import Container from '../components/container'
import WhatWeDo from '../components/whatWeDo'

export default function Home() {
  return (
    <div>
      <Container>
        <About />
        <WhatWeDo />
      </Container>
    </div>
  )
}
