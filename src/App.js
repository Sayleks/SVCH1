// App.js
import React from 'react';
import './App.css';
import Header from './header/header'; // Убедитесь, что путь правильный
import Main from './Main/main'
import Footer from './footer/footer.js'

function App() {
  return (
    <div>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;