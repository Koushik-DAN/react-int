
// import Increment from './components/Increment';
// import Decrement from './components/Decrement';
// import ShowValue from './components/ShowValue';
// import { useState } from 'react';



// function App() {
//   let [count,setCount] = useState(6)
//   return (
//     <div className="App">
//       <ShowValue agera={count} />
//      <Increment />
//      <Decrement />

    
//     </div>
//   );
// }

// export default App;



import React from 'react';
import './App.css';

// 1. Navigation Component
const Navbar = () => (
  <nav className="navbar">
    <h2>Taxplus Accountants</h2>
    <ul>
      <li>Home</li>
      <li>Services</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </nav>
);

// 2. Hero Section (The first thing users see)
const Hero = () => (
  <header className="hero">
    <h1>Professional Accounting You Can Trust.</h1>
    <p>Helping small businesses manage taxes, payroll, and growth.</p>
    <button className="cta-btn">Book a Consultation</button>
  </header>
);

// 3. Services Component (Using a list to stay organized)
const Services = () => {
  const servicesList = [
    { title: "Tax Preparation", desc: "Personal and corporate tax filing." },
    { title: "Bookkeeping", desc: "Monthly tracking of your expenses." },
    { title: "Payroll", desc: "Managing employee payments and compliance." }
  ];

  return (
    <section className="services">
      <h3>Our Services</h3>
      <div className="service-grid">
        {servicesList.map((service, index) => (
          <div key={index} className="service-card">
            <h4>{service.title}</h4>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

// 4. Main App (The "Container" that holds everything)
function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <Services />
      </main>
      <footer>
        <p>© 2024 Taxplus Accountants | All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;