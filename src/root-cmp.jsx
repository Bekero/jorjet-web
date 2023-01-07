import { AppHeader } from './cmps/app-header';
import { Route, Routes, useParams } from 'react-router-dom';
import './styles/main.scss';
import routes from './routes'
import { Contact } from './cmps/contact';
import { GoBack } from './cmps/go-back';
import { useEffect } from 'react';

function App() {

  const params = useParams()

  useEffect(() => {
    console.log('params :', params)
  }, [])


  return (
    <div className="app-container">
      <AppHeader />
      <div className="pages-container">
        {/* From Computer */}
        {params === {} ? '' : < GoBack />}
        <Routes>
          {routes.map(route => <Route key={route.path} exact={true} element={route.component} path={route.path} />)}
        </Routes>
      </div>
      <Contact />
    </div>
  );
}

export default App;
