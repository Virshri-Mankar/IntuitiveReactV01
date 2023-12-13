import './App.css';
import Navbar from './components/inc/Navbar';
import Footer from './components/inc/Footer';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Services from './components/pages/Services';
import Service1 from './components/pages/Service1';
import Service2 from './components/pages/Service2';
import Service3 from './components/pages/Service3';
import Location from './components/pages/Location';
import Blog from './components/pages/Blog';
import Login from './components/pages/Login';
import Offerings from './components/pages/Offerings';
// import Protected from './components/pages/Protected';
// import Page404 from './components/pages/Page404';
import User from './components/pages/User';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} /> 
          
         {/* <Route path="/" element={<Protected Component={Home} />} />
          <Route path="/" element={<Protected Component={About} />} /> */}
                 
          
          {/* nested route for services*/}
          <Route path="/services/" element={<Services/>} >
            <Route path="service1" element={<Service1/>} />
            <Route path="service2" element={<Service2/>} />
            <Route path="service3" element={<Service3/>} />
          </Route> 
          {/**%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */}
                 
          <Route path="/contact" element={<Contact/>} />

          <Route path="/location" element={<Location/>} />
                 
          <Route path="/blog" element={<Blog/>} />

          <Route path="/login" element={<Login/>} />
          
          <Route path="/offerings" element={<Offerings/>} />
                  
          {/* <Route path="/*" element={<Page404/>} /> directly open page 404 in next line page will navigate to home page or where u want */}
          <Route path="/*" element={ <Navigate to="/" /> } />

          <Route path="/user/:name" element={<User/>} />
        </Routes> 
       
      <Footer/>
      </BrowserRouter>
      
      
      
    </div>
  );
}

export default App;
