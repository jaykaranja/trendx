import './App.css';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Row from './components/Row';
import axiosrequests from './components/Requests';
import Footer from './components/Footer';

function App() {
  return (
      <div className='layout'>
        <Navbar />
        <Footer />
      </div>
  );
}

export default App;