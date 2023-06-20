import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Filter } from './Filter';
import { useLoadPodcasts } from '../../hooks/useLoadPodcasts';

import './podcastsContainer.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { linkStyle } from '../../utils/linksCss';
import { useStore } from '../../store/store';

export const PodcastsContainer = (props) => {
  const [podcastsList] = useLoadPodcasts();
  const [filteredPodcast, setFilteredPodcast] = useState();

  //Importamos las funciones para setear el loading
  const isLoading = useStore((state) => state.isLoading);
  const noLoading = useStore((state) => state.noLoading);
  //Ponemos en true el loading al cargar el componente
  useEffect(() => {
    isLoading();
  }, []);

  //Creamos una variable que devuelve el listado fitrado o sin filtrar
  const list = filteredPodcast ? filteredPodcast : podcastsList;
  //Ponemos en false el loading cuando termina de cargar
  noLoading();
  return (
    <div className='container'>
      <div className='search'>
        <div id='number'>
          <h1>{list.length}</h1>
        </div>
        <Filter
          setFilteredPodcast={setFilteredPodcast}
          podcastsList={podcastsList}
        ></Filter>
      </div>

      <div className='podcastsList'>
        {list.map((podcast) => (
          <Card sx={{ maxWidth: 345 }} className='card' key={podcast.id}>
            <Link
              to={`http://localhost:3000/podcast/${podcast.id}`}
              state={podcast.summary}
              style={linkStyle}
            >
              <CardMedia
                sx={{ height: 140 }}
                image={podcast.img}
                title={podcast.name}
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  {podcast.name}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  Author: {podcast.author}
                </Typography>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PodcastsContainer;
