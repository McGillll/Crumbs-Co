import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { MainLayout } from './layouts/MainLayout'
import { AboutPage } from './pages/AboutPage'
import { Authentication } from './pages/Authentication'
import { CallToAction } from './components/CallToAction'
import { AuthLayout } from './layouts/AuthLayout'
import { RegisterPage } from './pages/RegisterPage'


function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<MainLayout />}>
                <Route index element={<HomePage />} />
                <Route path='/about' element={<AboutPage />} />
                <Route path='/auth' element={<AuthLayout />}>
                    <Route index element={<Authentication />}/>
                    <Route path='/auth/signup' element={<RegisterPage />} />
                </Route>
            </Route>
        )
    )

    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default App
