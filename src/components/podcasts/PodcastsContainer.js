import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Filter } from './Filter';
import { useLoadPodcasts } from '../../hooks/useLoadPodcasts';

import './podcastsContainer.css';

export const PodcastsContainer = () => {
  const [podcastsList] = useLoadPodcasts();

  return (
    <div className='container'>
      <div className='busqueda'>
        <div id='numero'>
          <h1>{podcastsList.length}</h1>
        </div>
        <Filter></Filter>
      </div>

      <div className='podcastsList'>
        {podcastsList.map((podcast) => (
          <Card sx={{ maxWidth: 345 }} className='card'>
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
                {podcast.author}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PodcastsContainer;
