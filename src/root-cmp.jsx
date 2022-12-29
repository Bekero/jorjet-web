import { AppHeader } from './cmps/app-header';
import { HomePage } from './cmps/home-page';
import { MyStoryShort } from './cmps/my-story-short';
import logo from './logo.svg';
import './styles/main.scss';

function App() {
  return (
    <div className="app-container">
      <AppHeader />
      <div className="pages-container">
        <HomePage />
        <MyStoryShort />
      </div>
    </div>
  );
}

export default App;
