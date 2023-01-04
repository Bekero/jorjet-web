import { AppHeader } from './cmps/app-header';
import { Route, Routes } from 'react-router-dom';
import './styles/main.scss';
import routes from './routes'
import { AppHeader2 } from './cmps/app-header2';

function App() {
  return (
    <div className="app-container">
      <AppHeader />
      <div className="pages-container">
        <Routes>
          {routes.map(route => <Route key={route.path} exact={true} element={route.component} path={route.path} />)}
        </Routes>
      </div>
    </div>
  );
}

export default App;
