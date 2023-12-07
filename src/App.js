import React from 'react';
import Navbar from './Components/Navbar';
import Carousel from './Components/Carousel';
import About from './Components/About';
import Types from './Components/Types';
import Footer from './Components/Footer';

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Carousel />
        <About />
        <Types />
        <Footer />
      </div>
    );
  }
}

export default App;

