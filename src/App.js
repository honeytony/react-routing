import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import MainPage from './components/mainPage/mainPage';
import ProfilePage from './components/profilePage/profilePage';
import AboutPage from './components/aboutPage/aboutPage';


function App() {
  return (
    <div className="App">
        <Header/>
        <Routes>
          <Route path='/' Component={MainPage} />
          <Route path='/profile' Component={ProfilePage} />
          <Route path='/about' Component={AboutPage} />
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
