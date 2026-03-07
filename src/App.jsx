import "./App.css";
import Certifications from "./components/body/Certifications";
import Experience from "./components/body/Experience";
import Home from "./components/body/Home";
import PageCurtain from "./components/body/PageCurtain";
import Projects from "./components/body/Projects";
import Skills from "./components/body/Skills";
import Footer from "./components/footer/Footer";
import NavBar from "./components/header/Navbar";

function App() {
  return (
    <>
      <NavBar />
      
      <PageCurtain>
        <Home />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Footer />
      </PageCurtain>
    </>
  );
}

export default App;
