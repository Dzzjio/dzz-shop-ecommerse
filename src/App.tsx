import Footer from 'components/layout/footer/footer'
import Header from 'components/layout/header/header'
import PopularProductBox from 'components/layout/popularBox/popularBox'
import React from 'react'

function App() {
  return (
    <div>
      <Header />
      <div style={{display: "flex", justifyContent:"space-between", gap:"20px", margin:"30px"}}>
        <PopularProductBox productName="Bluebell Hand Block Tiered Dress" price="80$" sale={true} newItem={false} />
        <PopularProductBox productName="Another one" price="9.99$" sale={false} newItem={true} />
        <PopularProductBox productName="ludi" price="10.99$" sale={false} newItem={false} />
      </div>
      <Footer />
    </div>
  )
}

export default App
