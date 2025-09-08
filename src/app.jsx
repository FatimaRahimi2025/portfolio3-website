import NavBar from "./assets/Component/NavBar";
import Home from "./assets/Component/Home"
import About from "./assets/Component/About";
import SocialLink from "./assets/Component/SocialLink";
import Portfolio from "./assets/Component/Portfolio";
function App(){
  return(
    <div>
    <NavBar />
    <Home />
    <About />
    <Portfolio />
    <SocialLink />
    </div>
  )
}

export default App;