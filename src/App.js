import './styles/Global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav'
import Header from './components/Header'
import Book from './components/Book'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Nav/>
      <Header/>
      <Book/>
      <Footer/> 
    </>
  );
}

export default App;
