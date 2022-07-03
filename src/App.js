import { About } from "./components/about/About";
import { MyContact } from "./components/contact/MyContact";
import MyExperience from "./components/myexperience/MyExperience";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { Navigation } from "./components/Navigation/Navigation";
import { Project } from "./components/Project/Project";


function App() {
 
  return (
    <>
        <Header />
        <About/>
        <MyExperience />
        <Project />
        <MyContact />
        <Navigation />
        <Footer />
    </>
  );
}

export default App;
