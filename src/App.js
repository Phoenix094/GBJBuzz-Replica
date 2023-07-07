import Navbar from "./components/Navbar/Navbar"
import Introduction from "./components/Introduction/Introduction"
import Branding from "./components/Branding/Branding"
import ContactUs from "./components/ContactUs/ContactUs"

const App = () => {
  return (
    <div className="app">

      <Navbar />
      <Introduction />
      <Branding />
      <ContactUs />

    </div>
  )
}

export default App
