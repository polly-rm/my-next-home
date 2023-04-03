import { Routes, Route } from 'react-router-dom';

import Navigation from './components/Common/Navigation/Navigation';
import Home from './components/Home/Home';
import Footer from './components/Common/Footer/Footer';
import NotFound from './components/404/404';


function App() {
  return (

    <div id="box">
      <Navigation />


      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="*" element={<NotFound />} />

        </Routes>
      </main>


      <Footer />
    </div>


  );
}

export default App;
