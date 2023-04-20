import React, { useState } from 'react'
import Navbar from './Component/Navbar';
import News from './Component/News';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const App = () => {

  // Set values
  const pageSize = 10;
  const country = "in";
  const [progress, setProgress] = useState(0);
  const apiKey = process.env.REACT_APP_NEWS_API

  return (

    <div>
      <Router>
        {/* Top loading bar which is a npm package*/}
        <LoadingBar
          color='white'
          progress={progress}
        />
        <Navbar />
        {/*travel through one category to other by router and giving values as a props*/}
        <Routes>
          <Route exact path="/TopNews" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country={country} category="general" />}></Route>
          <Route exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country={country} category="general" />}></Route>
          <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country={country} category="business" />}></Route>
          <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country={country} category="entertainment" />}></Route>
          <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country={country} category="health" />}></Route>
          <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country={country} category="science" />}></Route>
          <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country={country} category="sports" />}></Route>
          <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country={country} category="technology" />}></Route>
        </Routes>
      </Router>
    </div>
  )
};

export default App; 
