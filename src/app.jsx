import NavBar from "./assets/Component/NavBar";
import Home from "./assets/Component/Home"
import About from "./assets/Component/About";
import SocialLink from "./assets/Component/SocialLink";
import Contact from "./assets/Component/Contact";
import Experience from "./assets/Component/Experience";
import Portfolio from "./assets/Component/Portfolio";
function App(){
  return(
    <div>
    <NavBar />
    <Home />
    <About />
    <Portfolio />
    <Experience />
    <Contact />
    <SocialLink />
    </div>
  )
}

export default App;