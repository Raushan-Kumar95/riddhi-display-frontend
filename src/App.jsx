import './App.css'
import Experience from './components/Experience';
import Header from './components/Header'
import Project from './components/Project';

// import Header from './components/Header'
import Service from './components/Service';

function App() {
  return (
    <div>
      <Header/>
      <Experience />
      <Project />
      {/* <Header/> */}
      <Service/>
    </div>
  )
}

export default App;
