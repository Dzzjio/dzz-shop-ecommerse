import { FC, memo } from 'react'
import { Routes, Route } from 'react-router-dom'

import Homepage from 'pages/home'
import Shop from 'pages/shop'
import BlogPage from 'pages/blog'
import ContactPage from 'pages/contact'
import AboutPage from 'pages/about'
import ErrorPage from 'pages/error'


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
        <Route path='/about' element={<AboutPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  )
}

export default memo(Router)
