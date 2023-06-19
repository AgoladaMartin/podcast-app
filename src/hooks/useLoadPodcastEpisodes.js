import { useState, useEffect } from 'react';
import moment from 'moment';

//Función que llama al api para cargar el listado de episodios de un podcast concreto a través de su id
export function useLoadPodcastEpisodes(id) {
  const [podcastEpisodes, setPodcastEpisodes] = useState('');
  var secondsToTime = function (s) {
    //Función para transformar los milisegundos a horas, minutos y segundos
    function addZ(n) {
      return (n < 10 ? '0' : '') + n;
    }

    var ms = s % 1000;
    s = (s - ms) / 1000;
    var secs = s % 60;
    s = (s - secs) / 60;
    var mins = s % 60;
    var hrs = (s - mins) / 60;

    return addZ(hrs) + ':' + addZ(mins) + ':' + addZ(secs);
  };
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
          //moment formatea la fecha a dia, mes y año
          date: moment(episode.releaseDate).utc().format('DD-MM-YYYY'),
          duration: secondsToTime(episode.trackTimeMillis),
        });
      });

      setPodcastEpisodes(episodes);
      console.log('raw', body);

      console.log('episodes', episodes);
    } catch (e) {
      console.error('Err:', e);
    }
  };
  useEffect(() => {
    loadPodcastEpisodes();
  }, []);
  return [podcastEpisodes, setPodcastEpisodes];
}
