import styled from "styled-components";
import Header from "./components/Banner/Header";
import ProfComponent from "./components/Banner/ProfComponent";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Developers from "./components/Developers/Developers";

function App() {
  return (
    <Container>
      <Banner>
        <Header />
        <ProfComponent />
      </Banner>
      <Skills />
      <Project>
        <Projects />
        <Developers />
      </Project>
    </Container>
  );
}

export default App;

const Container = styled.div``
const Banner = styled.div`
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
  height: 100vh;
  @media(max-width: 640px){
    height: 100%;
    padding-botton: 1rem;
  }
`
const Project = styled.div`
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
  
`