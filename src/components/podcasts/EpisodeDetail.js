import { useLocation } from 'react-router-dom';
import { PodcastsId } from './PodcastId';
import './episodeDetail.css';

export const EpisodeDetail = (props) => {
  //Recibimos la descripción y la url del podcast a través del componente Link mediante el objeto location
  const location = useLocation();
  //Accedemos a la variable url a través de la propiedad state del objeto location
  const url = location.state.url;

  //Accedemos a la variable description a través de la propiedad state del objeto location
  const description = location.state.description;

  //Variable para renderizar el componente PodcastsId con los links
  const links = true;

  return (
    <div id='episode'>
      <div id='cardPodcast'>
        <PodcastsId links={links}></PodcastsId>
      </div>
      <div id='cardEpisode'>
        <div
          id='description'
          dangerouslySetInnerHTML={{ __html: description }}
        ></div>
        <div id='audio'>
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
