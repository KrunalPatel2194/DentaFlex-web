import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './shared/appBar';
import Footer from './shared/footer';
import Home from './components/Home/index.tsx'
import { BrowserRouter, RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom';
import Login from './components/Login/index.tsx';
import Layout from './components/router/index.js';
import SignUp from './components/SignUp/index.tsx';
import Recover from './components/Recover/index.tsx';
import Booking from './components/Booking/index.tsx';
import AuthProvider from './shared/hooks/AuthProvider.js';
import PricingComponent from './components/Pricing/index.tsx';
import ContactUs from './components/Contact/index.tsx';
import ForgotPassword from './components/Forgotpwd/index.tsx';
import ResetPassword from './components/Resetpwd/index.tsx';
import PrivacyPolicy from './components/Privacy/index.tsx';

function App() {
  
  // initialize a browser router
  const router = createBrowserRouter([
    {
      // parent route component
      element: <Layout />,
      // child route components
      children: [
        {
          path: "/",
          element: <Home />,
        },
        // other pages....
        // {
        //   path: "/login",
        //   element: <Login />,
        // },
        // {
        //   path: "/signup",
        //   element: <SignUp />
        // },
        // {
        //   path: "/recover",
        //   element: <ForgotPassword />
        // },
        {
          path: "/book",
          element: <Booking/>
        },
        {
          path: "/pricing",
          element: <PricingComponent />
        },
        {
          path: "/contact",
          element: <ContactUs />
        },
        {
          path: "/privacy-policy",
          element: <PrivacyPolicy />
        },
        // Catch-all route to redirect to home page
        {
          path: "*",
          element: <Navigate to="/" replace />
        }
      ]
    }
  ]);
  
  return (
    <RouterProvider router={router}>
    </RouterProvider>
  );
}

export default App;