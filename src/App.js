/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import About from './components/About/About';
import Canvas from './components/Canvas/Canvas';
import Skills from './components/Skills/Skills';
import Proficiency from './components/Proficiency/Proficiency';
import Experience from './components/Experience/Experience';
import Project from './components/Projects/Project';
import Hire from './components/Hire/Hire';
import Footer from './components/Footer/Footer';
import CopyRight from './components/CopyRight/CopyRight';


function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <Header /> */}
      <Profile />
      <About />
      <Skills />
      <Proficiency/>
      <Experience/>
      <Project />
      <Hire />
      <Footer />
      <CopyRight />
    </div>
  );
}

export default App;
