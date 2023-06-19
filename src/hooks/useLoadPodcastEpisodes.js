import { useState, useEffect } from 'react';

export function useLoadPodcastEpisodes(id) {
  const [podcastEpisodes, setPodcastEpisodes] = useState('');
  const agregarCeroSiEsNecesario = (valor) => {
    if (valor < 10) {
      return '0' + valor;
    } else {
      return '' + valor;
    }
  };
  const milisegundosAMinutosYSegundos = (milisegundos) => {
    const minutos = parseInt(milisegundos / 1000 / 60);
    milisegundos -= minutos * 60 * 1000;
    const segundos = milisegundos / 1000;
    return `${agregarCeroSiEsNecesario(minutos)}:${agregarCeroSiEsNecesario(
      segundos.toFixed(1)
    )}`;
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
          date: episode.releaseDate,
          duration: milisegundosAMinutosYSegundos(episode.trackTimeMillis),
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
