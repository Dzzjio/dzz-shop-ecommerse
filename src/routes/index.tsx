import { FC, memo } from 'react'
import { Routes, Route } from 'react-router-dom'

import Homepage from 'pages/home'
import Shop from 'pages/shop'
import BlogPage from 'pages/blog'
import ContactPage from 'pages/contact'


interface IProps {
  lang?: string
}

const Router: FC<IProps> = ({ lang }) => {
  return (
    <Routes data-lang={lang}>
      <Route path="/">
        <Route index element={<Homepage />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/blog' element={<BlogPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path="*" element={<Homepage />} />
      </Route>
    </Routes>
  )
}

export default memo(Router)
