import { AppHeader } from './cmps/app-header';
import { Route, Routes, useParams } from 'react-router-dom';
import './styles/main.scss';
import routes from './routes'
import { Contact } from './cmps/contact';
import { GoBack } from './cmps/go-back';
import { SearchBar } from './cmps/search-bar';
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from 'react';

function App() {

  const params = useParams()
  const scrollUpRef = useRef()

  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="app-container">
      <AppHeader />
      <motion.div
        className="progress-bar"
        style={{ scaleX }}
      />
      <div className="pages-container">
        <SearchBar />
        {params === {} ? '' : < GoBack />}
        <Routes>
          {routes.map(route => <Route key={route.path} exact={true} element={route.component} path={route.path} />)}
        </Routes>
      </div>
      <Contact
        scrollUpRef={scrollUpRef}
      />
    </div>
  );
}

export default App;
