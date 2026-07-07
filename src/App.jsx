import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

import Cursor from './Cursor';
import ScrollProgress from './ScrollProgress';
import Loader from './Loader';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Skills from './Skill';
import Projects from './Projects';
import Services from './Services';
import Experience from './Experience';
import Testimonials from './Testimonials';
import Contact from './Contact';
import Footer from './Footer';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.classList.toggle('light', theme === 'light');
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  return (
    <div className={theme}>
      <AnimatePresence>
        {loading && (
          <Loader key="loader" onDone={() => setLoading(false)} />
        )}
      </AnimatePresence>

      {!loading && (
        <>
          <Cursor />
          <ScrollProgress />
          {/* <Navbar theme={theme} toggleTheme={toggleTheme} /> */}

          <main>
            <Hero />
            <About />
            {/* <Skills /> */}
            {/* <Projects /> */}
            <Services />
            {/* <Experience /> */}
            
            {/* <Testimonials /> */}
            <Contact />
          </main>

          <Footer />
        </>
      )}
    </div>
  );
}