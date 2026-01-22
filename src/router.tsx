import { createBrowserRouter } from 'react-router-dom'
import AppLayout from './ui/layout/AppLayout'
import Home from './pages/Home'
import Shop from './pages/Shop'
import ProductDetails from './pages/ProductDetails'
import Subscriptions from './pages/Subscriptions'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Success from './pages/Success'
import About from './pages/About'
import Contact from './pages/Contact'
import Terms from './pages/legal/Terms'
import Privacy from './pages/legal/Privacy'
import RefundPolicy from './pages/legal/RefundPolicy'
import DeliveryPolicy from './pages/legal/DeliveryPolicy'
import SubscriptionTerms from './pages/legal/SubscriptionTerms'
import Cookies from './pages/legal/Cookies'
import NotFound from './pages/NotFound'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <AppLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'shop', element: <Shop /> },
      { path: 'product/:slug', element: <ProductDetails /> },
      { path: 'subscriptions', element: <Subscriptions /> },
      { path: 'cart', element: <Cart /> },
      { path: 'checkout', element: <Checkout /> },
      { path: 'success', element: <Success /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: 'terms', element: <Terms /> },
      { path: 'privacy', element: <Privacy /> },
      { path: 'refund-policy', element: <RefundPolicy /> },
      { path: 'delivery-policy', element: <DeliveryPolicy /> },
      { path: 'subscription-terms', element: <SubscriptionTerms /> },
      { path: 'cookies', element: <Cookies /> },
      { path: '*', element: <NotFound /> }
    ]
  }
])
