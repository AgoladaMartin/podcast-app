import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/header/header';

import PodcastsContainer from './components/podcasts/PodcastsContainer';
import { PodcastProfile } from './components/podcasts/PodcastProfile';
import { EpisodeDetail } from './components/podcasts/EpisodeDetail';

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path='/' element={<PodcastsContainer />} />
        <Route path='/podcast/:id' element={<PodcastProfile />} />
        <Route
          path='/podcast/:id/episode/:episodeId'
          element={<EpisodeDetail />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
