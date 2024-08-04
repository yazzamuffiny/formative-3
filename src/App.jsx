import './App.css'

//navigation imports
import { HashRouter } from "react-router-dom"
import Links from './routes/Links'

//header and footer
import Header from './nav/Header'
import Footer from './nav/Footer'

const App = () => {


  return (
    <HashRouter>
      <Header/>
      <Links/>
      <Footer/>
    </HashRouter>
  )
}

export default App
