import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';

import Navigation from './components/Common/Navigation/Navigation';
import Home from './components/Home/Home';
import Footer from './components/Common/Footer/Footer';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import Profile from './components/Profile/Profile';
import NotFound from './components/404/404';


function App() {
  return (
    <AuthProvider>

      <div id="box">
        <Navigation />

      
          <main id="main-content">
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/login" element={<Login />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/register" element={<Register />} />

             

              <Route path="/profile" element={<Profile />} />
              

              <Route path="*" element={<NotFound />} />

            </Routes>
          </main>
       

        <Footer />
      </div>

    </AuthProvider >
  );
}

export default App;
