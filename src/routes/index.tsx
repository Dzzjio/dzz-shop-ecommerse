import { FC, memo } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

import Homepage from 'pages/home'
import Shop from 'pages/shop'
import BlogPage from 'pages/blog'
import ContactPage from 'pages/contact'
import AboutPage from 'pages/about'
import ErrorPage from 'pages/error'
import AuthPage from 'pages/auth'
import LogIn from 'pages/auth/logIn'
import Register from 'pages/auth/register'


interface IProps {
  lang?: string
}

const Router: FC<IProps> = ({ lang }) => {

  return (
    <Routes data-lang={lang}>
        <Route index element={<Homepage />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/blog' element={<BlogPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path="/auth" element={<AuthPage />}>
            <Route path="/auth/login" element={<LogIn />} />
            <Route path="/auth/register" element={<Register />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
    </Routes>
  )
}

export default memo(Router)
