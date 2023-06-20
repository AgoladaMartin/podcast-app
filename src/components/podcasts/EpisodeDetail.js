import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useLocation, useParams } from 'react-router-dom';
import { useLoadPodcastProfile } from '../../hooks/useLoadPodcastProfile';
import { PodcastsId } from './PodcastId';
import './episodeDetail.css';
import { useStore } from '../../store/store';
import { useEffect } from 'react';
import { urlFinder } from '../../utils/urlFinder';

export const EpisodeDetail = (props) => {
  //Importamos las funciones para cuando está cargando el componente
  const isLoading = useStore((state) => state.isLoading);
  const noLoading = useStore((state) => state.noLoading);
  //Ponemos en true el loading al cargar el componente

  //Recibimos la descripción y la url del podcast a través del componente Link mediante el objeto location
  const location = useLocation();
  //Accedemos a la variable url a través de la propiedad state del objeto location
  const url = location.state.url;

  //Accedemos a la variable description a través de la propiedad state del objeto location
  const description = location.state.description;
  const descriptionHtml = urlFinder(description);
  console.log(descriptionHtml);
  //Variable para renderizar el componente PodcastsId con los links
  const links = true;
  //Ponemos en false el loading cuando termina de cargar

  return (
    <div id='episode'>
      <div id='cardEpisode'>
        <PodcastsId links={links}></PodcastsId>
      </div>
      <div id='audio'>
        <div id='description'>
          <div dangerouslySetInnerHTML={{ __html: descriptionHtml }}></div>
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
