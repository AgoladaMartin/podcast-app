import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useLocation, useParams } from 'react-router-dom';
import { useLoadPodcastProfile } from '../../hooks/useLoadPodcastProfile';
import { PodcastsId } from './PodcastId';
import './episodeDetail.css';

export const EpisodeDetail = (props) => {
  //Recibimos la descripción y la url del podcast a través del componente Link mediante el objeto location
  const location = useLocation();
  //Accedemos a la variable url a través de la propiedad state del objeto location
  const url = location.state.url;

  //Accedemos a la variable description a través de la propiedad state del objeto location
  const description = location.state.description;

  return (
    <div id='episode'>
      <div id='cardEpisode'>
        <PodcastsId></PodcastsId>
      </div>
      <div id='audio'>
        <div id='description'>
          <p>{description}</p>
          <audio controls>
            <source src={url} type='audio/ogg' />
            <source src={url} type='audio/mpeg' />
            <source src={url} type='audio/mp3' />
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
    </div>
  );
};
