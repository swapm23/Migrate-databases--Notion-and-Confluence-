import './App.scss';
import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import RichTextEditor from './components/RichTextEditor'
import TokenForm from './components/TokenForm'

function App() {
  return (
    <div className="App">
      
      <Navbar/>

      <div className="row">
        <div className="col"><TokenForm /></div>
        <div className="col"><RichTextEditor/></div>
      </div>
      
    </div>
  );
}

export default App;
