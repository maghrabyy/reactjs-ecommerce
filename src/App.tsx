import './App.css'
import { RootLayout } from './layouts/root-layout'
import { HomePage } from './pages/homePage'
import { NotFound404Page } from './pages/notFoundPage';
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from 'react-router-dom';


function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route index element={<HomePage/>}/>
      <Route path="*" element={<NotFound404Page/>}/>
    </Route>
  ))
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
