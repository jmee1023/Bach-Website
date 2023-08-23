import logo from './logo.svg';
import './App.css';
import ContactForm from './components/ContactForm';
import ImageDescription from './components/ImageDescription';
import Navbar from './components/Navbar';
import testImage from './resources/test.jpg'
import pool from './resources/pool.jpg'

function App() {

  return (
    <div className="App">
    <header>
        <Navbar />
        <h1>Scottsdale Bachelor Party Services</h1>
        <p>Your Ultimate Destination for Unforgettable Bachelor Parties in Scottsdale, Arizona</p>
    </header>
    <section className="services">
        <h2>Our Services</h2>
        <p>We specialize in creating amazing bachelor party experiences in Scottsdale, Arizona. Whether it's adventure, relaxation, or nightlife, we've got you covered!</p>
    </section>
    <div className="image-grid">
                <ImageDescription image={pool} description="Access to Scottsdales most exclusive pool parties" />
                <ImageDescription image={testImage} description="Description 2" />
                <ImageDescription image={testImage} description="Description 3" />
                <ImageDescription image={testImage} description="Description 4" />
                <ImageDescription image={testImage} description="Description 5" />
                <ImageDescription image={testImage} description="Description 6" />
                <ImageDescription image={testImage} description="Description 7" />
                <ImageDescription image={testImage} description="Description 8" />
                {/* Add more ImageDescription components as needed */}
            </div>
  <ContactForm />
    <footer>
        <p>&copy; 2023 Scottsdale Bachelor Party Travel</p>
    </footer>

    </div>
  );
}

export default App;
