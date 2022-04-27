import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


function App() {
  const [themeMode, setThemeMode] = useState("light")

  const [alertMessage, setAlertMessage] = useState('', '')

  const toggleThemeMode = () => {
    if (themeMode === 'dark') {
      setThemeMode("light")
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode Enabled ", "success")
    } else {
      setThemeMode("dark")
      document.body.style.backgroundColor = '#042773'
      showAlert("Dark Mode Enabled ", "success")
    }
  }



  const showAlert = (message, type) => {
    setAlertMessage({
      msg: message,
      type: type

    });

    setTimeout(() => {
      setAlertMessage(null)
    },1500)

  }

  return (
    <>

      <Router>
        <Navbar title="TextUtils" aboutUsTitle="About Us" mode={themeMode} toggleThemeMode={toggleThemeMode}></Navbar>

        <Alert alertMessage={alertMessage} ></Alert>
        <div className='container my-3' >

          <Routes>
            <Route exact path="/" element={<TextForm heading="Enter the text to anayze" mode={themeMode} showAlert={showAlert} ></TextForm>} />
            <Route exact path="/about" element={<About themeMode = {themeMode}/>} />
          </Routes>
          {/* <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/">
              <TextForm heading="Enter the text to anayze" mode={themeMode} showAlert={showAlert} ></TextForm>
            </Route>
          </Switch> */}

        </div>
      </Router>
    </>
  );
}

export default App;
