import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavMobile from './components/NavMobile';
import BackTopBtn from './pages/BackTopBtn';
import Resources from './pages/Resources';
import Explore from './pages/Explore';
import Header from './pages/Header';
import Pages from './pages/Pages';

// import aos (animate on scroll)
import Aos from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [navMobile, setNavMobile] = useState(false);

    // aos initialization
    useEffect(() => {
      Aos.init({
        duration: 1000,
        delay: 1,
      });
    });
  

  return (
    <div className='relative overflow-hidden before:w-[600px] before:h-[200px] before:bg-circle before:bg-no-repeat before:absolute before:-top-16 before:left-[600px] before:hidden before:lg:flex'>
      <Header setNavMobile={setNavMobile} />
      <Routes>
        <Route path='/resources' element={<Resources />} />
      </Routes>
      <Routes>
        <Route path='/' element={<Pages />} />
      </Routes>
      {/* mobile nav */}
      <div className={`${navMobile ? 'right-0' : '-right-full'} fixed top-0 bottom-0 w-48 transition-all`}>
        <NavMobile setNavMobile={setNavMobile} />
      </div>
      <Explore />
      <BackTopBtn />
    </div>
  );
}

export default App;
