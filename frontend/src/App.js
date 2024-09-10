import './App.css';
import FormPage1 from './components/Form/FormPage1';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FormPage2 from './components/Form/FormPage2';
import FormPage3 from './components/Form/FormPage3';


function App(){
  return(
    <Router>
      <Routes>
        <Route path="/" element={<FormPage1></FormPage1>} />
        <Route path="/page2" element={<FormPage2></FormPage2>} />
        <Route path="/page3" element={<FormPage3></FormPage3>} />
      </Routes>
    </Router>
  );
}
export default App;
