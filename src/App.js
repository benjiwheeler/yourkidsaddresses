// App.js
import React from 'react';
import Addresses from './controllers/Addresses';
import Header from './components/Header';
import Title from './components/Title';
import WarningImages from './components/WarningImages';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <Title />
      <WarningImages />
      <Addresses />
      {/* Other components will go here */}
      <Footer />
    </div>
  );
};

export default App;
