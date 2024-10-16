import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '@pages/Home.jsx'
import MovieDetail from '@pages/MovieDetail.jsx'
import RootLayout from '@pages/RootLayout.jsx'
import TVShowDetail from '@pages/TVShowDetail'
import ModalProvider from '@components/context/ModalProvider'

const router = createBrowserRouter([
    {
        element: <RootLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/movie/:id',
                element: <MovieDetail />,
            },
            {
                path: '/tv/:id',
                element: <TVShowDetail />,
            },
        ],
    },
])
ReactDOM.createRoot(document.getElementById('root')).render(
    // <React.StrictMode>
    <ModalProvider>
        <RouterProvider router={router} />
    </ModalProvider>

    // </React.StrictMode>
)
