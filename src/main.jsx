import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import RootLayout from '@pages/RootLayout.jsx'

import ModalProvider from '@components/context/ModalProvider'

import { lazy } from 'react'
import Search from '@pages/Search'

const MovieDetail = lazy(() => import('@pages/MovieDetail.jsx'))
const Home = lazy(() => import('@pages/Home.jsx'))
const People = lazy(() => import('@pages/People.jsx'))
const TVShowDetail = lazy(() => import('@pages/TVShowDetail.jsx'))
const DEFAULT_HEADER = {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
}
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
            {
                path: '/people/:id',
                element: <People />,
                loader: async ({ params }) => {
                    const response = await fetch(
                        `${import.meta.env.VITE_API_HOST}/person/${params.id}?append_to_response=combined_credits`,
                        {
                            method: 'GET',
                            headers: DEFAULT_HEADER,
                        }
                    )
                    return response
                },
            },
            {
                path: '/search',
                element: <Search />,
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
