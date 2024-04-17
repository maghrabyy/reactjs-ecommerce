import './App.css'
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from 'react-router-dom';

import { RootLayout } from './layouts/root-layout'
import { HomePage } from './pages/homePage'
import { ShoppingCartPage } from './pages/shoppingCartPage';
import { DealsPage } from './pages/dealsPage';
import { ContactUsPage } from './pages/contact-usPage';
import { AboutPage } from './pages/aboutPage';
import { NotFound404Page } from './pages/notFoundPage';

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route index element={<HomePage/>}/>
      <Route path='/shopping-cart' element={<ShoppingCartPage/>}/>
      <Route path='/deals' element={<DealsPage/>}/>
      <Route path='/contact-us' element={<ContactUsPage/>}/>
      <Route path='/about' element={<AboutPage/>}/>
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
