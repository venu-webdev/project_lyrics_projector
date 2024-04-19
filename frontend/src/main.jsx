import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Songs from './pages/Songs.jsx'
import SongsPreview from './pages/SongsPreview.jsx'
import SongEdit from './pages/SongEdit.jsx'
import NewSong from './pages/NewSong.jsx'

const router = createBrowserRouter(
  [{
    path:'/',
    element: <App/>,
    children:[
      {
        path:'/songs',
        element: <Songs/>
      },
      {
        path:'/songs/preview',
        element: <SongsPreview/>
      },
      {
        path: '/edit',
        element: <SongEdit/>
      },
      {
        path: '/new',
        element: <NewSong/>
      }
    ],
    errorElement: <div>404 | Not found</div>,
  },
  
]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
