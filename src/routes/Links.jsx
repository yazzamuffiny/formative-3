import { Route, Routes } from "react-router-dom"

//pages imports
import Home from "../pages/Home"
import AboutMe from "../pages/AboutMe"
import SingleArticle from "../pages/SingleArticle"

const Links = () => {
  return (
    <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/article/:id" element={<SingleArticle/>}/>
        <Route path="/about" element={<AboutMe/>}/>
    </Routes>
  )
}

export default Links
