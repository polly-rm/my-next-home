import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { PropertyProvider } from './contexts/PropertyContext';

import Navigation from './components/Common/Navigation/Navigation';
import Home from './components/Home/Home';
import Footer from './components/Common/Footer/Footer';
import PropertyList from './components/PropertyList/PropertyList';
import PropertyCreate from './components/PropertyCreate/PropertyCreate';
import PropertyEdit from './components/PropertyEdit/PropertyEdit';
import PropertyDetails from './components/PropertyDetails/PropertyDetails';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import Profile from './components/Profile/Profile';
import Contact from './components/Contact/Contact';
import NotFound from './components/404/404';


function App() {
  return (
    <AuthProvider>

      <div id="box">
        <Navigation />

        <PropertyProvider>
          <main id="main-content">
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/login" element={<Login />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/register" element={<Register />} />

              <Route path="/catalog/create" element={<PropertyCreate />} />

              <Route path="/catalog" element={<PropertyList />} />
              <Route path="/catalog/details/:propertyId" element={<PropertyDetails />} />
              <Route path="/catalog/edit/:propertyId" element={<PropertyEdit />} />


              <Route path="/profile" element={<Profile />} />
              <Route path="/contact" element={<Contact />} />

              <Route path="*" element={<NotFound />} />

            </Routes>
          </main>
        </PropertyProvider>

        <Footer />
      </div>

    </AuthProvider >
  );
}

export default App;
