import { useEffect, useState, lazy, Suspense, useFetch } from "react";
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
import EditProperty from './components/EditProperty/EditProperty';
import PropertyList from './components/PropertyList/PropertyList';
import PropertyDetails from "./components/PropertyDetails/PropertyDetails";
import Footer from './components/Footer/Footer';

import { AuthProvider } from './contexts/AuthContext';
import { PropertyProvider } from './contexts/PropertyContext';

import './App.css';


const Register = lazy(() => import('./components/Register/Register'));

function App() {
  // const [properties, setProperties] = useFetch('http://localhost:3030/jsonstore/properties', []);
  // const [properties, setProperties] = useState([]);

  // console.log(properties);

  return (
    <AuthProvider>
      <div id="box">

        <Navigation />

        <PropertyProvider>
          <main id="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={
                <Suspense fallback={<span>Loading....</span>}>
                  <Register />
                </Suspense>
              } />
              <Route path="/logout" element={<Logout />} />
              <Route path="/create" element={<CreateProperty />} />
              <Route path="/property-list/:propertyId/edit" element={<EditProperty />} />
              <Route path="/property-list" element={<PropertyList />} />
              <Route path="/property-list/:propertyId" element={<PropertyDetails />} />
            </Routes>
          </main>
        </PropertyProvider>

        <Footer />

      </div>
    </AuthProvider>
  );
}

export default App;
