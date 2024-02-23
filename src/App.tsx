import Footer from 'components/layout/footer/footer'
import Header from 'components/layout/header/header'
import HeaderBotYellow from 'components/layout/headerBotYellow/headerBotY'
import Routes from 'routes'

function App() {
  return (
    <div>
      <Header />
      <HeaderBotYellow imgUrl={'https://media.wired.com/photos/5e9110887b575f0008effd4f/master/pass/Culture_ps5_49747503557_566da5ebc8_3k.jpg'} />
      <Routes />
      <Footer />
    </div>
  )
}

export default App
