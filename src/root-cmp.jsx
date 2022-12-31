import { AppHeader } from './cmps/app-header';
import { HomePage } from './cmps/home-page';
import { MyStoryShort } from './cmps/my-story-short';
import { BgcImg2 } from './cmps/bgc-img-2';
import logo from './logo.svg';
import './styles/main.scss';
import { RecipeProduct } from './cmps/recipe-product';
import { BgcImg3 } from './cmps/bgc-img-3';
import { Contact } from './cmps/contact';

function App() {
  return (
    <div className="app-container">
      <AppHeader />
      <div className="pages-container">
        <HomePage />
        <MyStoryShort />
        <BgcImg2 />
        <RecipeProduct />
        <BgcImg3 />
        <Contact />
      </div>
    </div>
  );
}

export default App;
