import React, {useState} from 'react'
import Navbar from './Component/Navbar';
import News from './Component/News';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App =()=> {
  const pageSize = 10;
  const country = "in";
  const [progress, setProgress] = useState(0)
  
  
    return (
      <div>
       
        <Router>
          <Navbar />
          <LoadingBar
        color='#f11946'
        progress={progress}
        height={3}
      />
          <Routes>
            <Route exact path="/general" element={<News setProgress={setProgress}  key="general" pageSize={pageSize} country={country} category="general" />}></Route>
            <Route exact path="/business" element={<News setProgress={setProgress}  key="business" pageSize={pageSize} country={country} category="business" />}></Route>
            <Route exact path="/entertainment" element={<News setProgress={setProgress}  key="entertainment" pageSize={pageSize} country={country} category="entertainment" />}></Route>
            <Route exact path="/health" element={<News setProgress={setProgress}  key="health" pageSize={pageSize} country={country} category="health" />}></Route>
            <Route exact path="/science" element={<News setProgress={setProgress}  key="science" pageSize={pageSize} country={country} category="science" />}></Route>
            <Route exact path="/sports" element={<News setProgress={setProgress}  key="sports" pageSize={pageSize} country={country} category="sports" />}></Route>
            <Route exact path="/technology" element={<News setProgress={setProgress}  key="technology" pageSize={pageSize} country={country} category="technology" />}></Route>
            
          </Routes>
        </Router>
      </div>
    )
  }

  export default App; 
