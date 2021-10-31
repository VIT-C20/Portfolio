import { Helmet } from 'react-helmet';
import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import ContactUs from './components/ContactUs/ContactUs';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Services from './components/Services/Services';
import Testimonials from './components/Testimonials/Testimonials';

function App() {
    return (
        <div className="App">
            <Helmet>
                <title>G.P. Enterprises</title>
            </Helmet>
            <Navbar/>
            <div id="top"></div>
            <Hero/>
            <Services/>
            <AboutUs />
            <Testimonials />
            <ContactUs />
            <Footer />
        </div>
    );
}

export default App;
