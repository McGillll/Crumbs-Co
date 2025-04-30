import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { MainLayout } from './layouts/MainLayout'
import { AboutPage } from './pages/AboutPage'
import { Authentication } from './pages/Authentication'
import { CallToAction } from './components/CallToAction'


function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<MainLayout />}>
                <Route index element={<HomePage />} />
                <Route path='/about' element={<AboutPage />} />
                <Route path='/auth' element={<Authentication />} />
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
