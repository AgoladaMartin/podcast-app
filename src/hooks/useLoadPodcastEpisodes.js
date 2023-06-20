import { useState, useEffect } from 'react';
//Importamos moment para formatear la fecha a dia, mes y año
import moment from 'moment';
//Importamos función para formatear la duración
import { secondsToTime } from '../utils/durationFormat';

//Función que llama al api para cargar el listado de episodios de un podcast concreto a través de su id
export function useLoadPodcastEpisodes(id) {
  const [podcastEpisodes, setPodcastEpisodes] = useState('');

  const loadPodcastEpisodes = async () => {
    try {
      const res = await fetch(
        `https://corsproxy.io/?https://itunes.apple.com/lookup?id=${id}&entity=podcastEpisode`,
        {
          method: 'GET',
        }
      );
      const body = await res.json();
      let episodes = [];
      body.results.forEach((episode) => {
        episodes.push({
          id: episode.trackId,
          title: episode.trackName,
          date: moment(episode.releaseDate).utc().format('DD-MM-YYYY'),
          duration: episode.trackTimeMillis
            ? secondsToTime(episode.trackTimeMillis)
            : 'Unknown',
          url: episode.episodeUrl,
          description: episode.description,
        });
      });
      setPodcastEpisodes(episodes);
    } catch (e) {
      console.error('Err:', e);
    }
  };

  useEffect(() => {
    loadPodcastEpisodes();
  }, []);
  return [podcastEpisodes, setPodcastEpisodes];
}
