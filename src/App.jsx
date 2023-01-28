import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css'
import Header from './components/header/Header';
import CallToMain from './components/home/CallToMain';
import Subscribe from './components/home/Subscribe';
import Footer from './components/footer/Footer';

import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage'





function App() {
  return (
    <BrowserRouter>
    <Header/>

    <Routes>
        <Route exact path='/' element={<HomePage/>} />
        <Route exact path='/about-us' element={<AboutUsPage/>} />
    </Routes>

    <CallToMain/>
    <Subscribe/>
    <Footer/>
      
    </BrowserRouter>
  )
}

export default App;
