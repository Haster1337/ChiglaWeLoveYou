import React from 'react';
import './App.css';
import Header from './components/Header';
import Memes from './pages/Memes';
import Wishes from './pages/Wishes';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Flex } from 'antd';
import Main from './pages/Main';
import Present from './pages/Present';

function App() {
  return (
    <BrowserRouter>
    <Flex className="App" vertical gap={'middle'}>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path='/memes' element={<Memes />}/>
        <Route path='/wishes' element={<Wishes />} />
        <Route path="/present" element={<Present />} />
      </Routes>
        
      
      <div className='footer'></div>
    </Flex>
    </BrowserRouter>
  );
}

export default App;
