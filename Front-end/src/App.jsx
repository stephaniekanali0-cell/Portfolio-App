import { Hero } from "@/Sections/Hero";
import { About } from "@/Sections/About";
import { Projects } from "@/Sections/Projects";
import { Experience } from "@/Sections/Experience";
import { Testimonials } from "@/Sections/Testimonials"
import { Contact } from "@/Sections/Contact"

function App() {
  return( 
  <div className="min-h-screen overflow-x-hidden">
    
    {/* This is to make the navbar on top and the other sequential components after  */}

     <Navbar/>

    {/* Main tag to call all the other components */}
    <main>
      <Hero/>
      <About/>
      <Projects/>
      <Experience/>
      <Testimonials/>
      <Contact/>
    </main>
  </div>
  );
}

export default App
