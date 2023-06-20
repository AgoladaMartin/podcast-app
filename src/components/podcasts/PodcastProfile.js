import { PodcastsId } from './PodcastId';
import { PodcastEpisodes } from './PodcastEpisodes';
import './podcastProfile.css';
import { EpisodeDetail } from './EpisodeDetail';
import { useStore } from '../../store/store';
import { useEffect } from 'react';

export const PodcastProfile = () => {
  //Importamos las funciones para cuando está cargando el componente
  const isLoading = useStore((state) => state.isLoading);
  const noLoading = useStore((state) => state.noLoading);
  //Ponemos en true el loading al cargar el componente

  return (
    <div id='podcastProfile'>
      <PodcastsId></PodcastsId>
      <PodcastEpisodes></PodcastEpisodes>
    </div>
  );
};
