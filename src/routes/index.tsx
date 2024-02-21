import { FC, memo } from 'react'
import { Routes, Route } from 'react-router-dom'

import Homepage from 'pages/home'
import Shop from 'pages/shop'


interface IProps {
  lang?: string
}

const Router: FC<IProps> = ({ lang }) => {
  return (
    <Routes data-lang={lang}>
      <Route path="/">
        <Route index element={<Homepage />} />
        <Route path='/shop' element={<Shop />} />
        <Route path="*" element={<Homepage />} />
      </Route>
    </Routes>
  )
}

export default memo(Router)
