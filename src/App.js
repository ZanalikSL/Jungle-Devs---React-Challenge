import { InputContainer } from './components/inputContainer'
import { Header } from './components/Header'
import { Banner } from './components/Banner'
import { Section1 } from './components/Section1'
import { Divider } from './components/Divider'
import { SharedPayment } from './components/SharedPayment'
import { FrameworkSection } from './components/FrameworkSection'
import { ComingSoonSection } from './components/ComingSoonSection'
import { Footer } from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Section1 />
      <Divider />
      <InputContainer />
      <Divider />
      <SharedPayment />
      <Divider />
      <FrameworkSection />
      <Divider />
      <ComingSoonSection />
      <Footer />
    </>
  )
}

export default App
