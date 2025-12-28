import React from 'react';
import Home from './pages/Home';
import Footer from './components/Footer'; // <--- Import Footer

function App() {
  return (
    <div className="text-primary">
      <Home />
      <Footer /> {/* <--- Footer Added Here */}
    </div>
  );
}

export default App;