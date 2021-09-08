import { InputContainer } from './components/InputContainer'
import { Header } from './components/Header'
import { Banner } from './components/Banner'
import { ShareYourHome } from './components/ShareYourHome'
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
      <ShareYourHome />
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
