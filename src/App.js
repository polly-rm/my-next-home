import { useEffect, useState, lazy, Suspense } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';

import * as propertyService from './services/propertyService';

import { AuthContext } from './contexts/AuthContext';
import { PropertyContext } from './contexts/PropertyContext';

import { useLocalStorage } from "./hooks/useLocalStorage";

import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import CreateProperty from './components/CreateProperty/CreateProperty';
import PropertyList from './components/PropertyList/PropertyList';
import PropertyDetails from "./components/PropertyDetails/PropertyDetails";
import Footer from './components/Footer/Footer';

import './App.css';


const Register = lazy(() => import('./components/Register/Register'));

function App() {
  const [properties, setProperties] = useState([]);
  const [auth, setAuth] = useLocalStorage('auth', {});
  const navigate = useNavigate();

  const userLogin = (authData) => {
    setAuth(authData);
  };

  const userLogout = () => {
    setAuth({});
  };

  const propertyAdd = (propertyData) => {
    setProperties(state => [
      ...state,
      propertyData,
    ]);

    navigate('/property-list');
  };

  useEffect(() => {
    propertyService.getAll()
      .then(result => {
        setProperties(result);
      });
  }, []);

  return (
    <AuthContext.Provider value={{ user: auth, userLogin, userLogout }}>
      <div id="box">

        <Navigation />

        <PropertyContext.Provider value={{ properties, propertyAdd }}>
          <main id="main-content">
            <Routes>
              <Route path="/" element={<Home properties={properties}/>} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={
                <Suspense fallback={<span>Loading....</span>}>
                  <Register />
                </Suspense>
              } />
              <Route path="/logout" element={<Logout />} />
              <Route path="/create" element={<CreateProperty />} />
              <Route path="/property-list" element={<PropertyList properties={properties} />} />
              <Route path="/property-list/:propertyId" element={<PropertyDetails properties={properties} />} />
            </Routes>
          </main>
        </PropertyContext.Provider>

        <Footer />

      </div>
    </AuthContext.Provider>
  );
}

export default App;
