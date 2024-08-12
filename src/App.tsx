import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Auth from "./pages/Auth"
import { BookingPage } from "./pages/BookingPage"
import { Admin } from "./pages/Admin"
import RazorpayButton from "./pages/Payment"
import AboutUs from "./components/Aboutus"

function App() {


  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/bookings" element={<BookingPage />} />
        <Route path="/admin" element={<Admin/>} />
        <Route path='/payment' element={<RazorpayButton/>}/>
        <Route path="/aboutus" element={<AboutUs/>} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
