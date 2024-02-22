import Footer from 'components/layout/footer/footer'
import Header from 'components/layout/header/header'
import HeaderBotYellow from 'components/layout/headerBotYellow/headerBotY'
import Routes from 'routes'

function App() {
  return (
    <div>
      <Header />
      <HeaderBotYellow />
      <Routes />
      <Footer />
    </div>
  )
}

export default App
