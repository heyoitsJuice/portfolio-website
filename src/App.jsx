import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Works from "./components/Works/Works";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";

function App() {

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Hero/>
        <Works/>
        <Blog/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
