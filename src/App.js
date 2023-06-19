import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/header/header';
import { PodcastsId } from './components/podcasts/PodcastId';

import PodcastsContainer from './components/podcasts/PodcastsContainer';
import { PodcastProfile } from './components/podcasts/PodcastProfile';

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path='/' element={<PodcastsContainer />} />
        <Route path='/podcast/:id' element={<PodcastProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
