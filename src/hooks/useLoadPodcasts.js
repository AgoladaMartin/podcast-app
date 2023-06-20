import { useState, useEffect } from 'react';
//Importamos función para saber si local storage lleva más de un dia
import { storageOutDated } from '../utils/storageOutDated';

import { useStore } from '../store/store';

//Función que llama al api para cargar el listado de 100 podcasts
export function useLoadPodcasts() {
  const [podcastsList, setPodcastsList] = useState([]);

  //Importamos las funciones para setear el loading a través del store
  const isLoading = useStore((state) => state.isLoading);
  const noLoading = useStore((state) => state.noLoading);

  //Creamos una constante con los datos de local storage
  const getlocalStorage = JSON.parse(
    localStorage.getItem('podcastsListStorage')
  );

  const loadPodcasts = async () => {
    if (storageOutDated(getlocalStorage)) {
      isLoading();
      try {
        const res = await fetch(
          'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json',
          {
            method: 'GET',
          }
        );
        const body = await res.json();

        let podcasts = [];
        body.feed.entry.forEach((p) => {
          let podcast = {
            id: p.id.attributes['im:id'],
            img: p['im:image'][2].label,
            name: p['im:name'].label,
            author: p['im:artist'].label,
            summary: p.summary ? p.summary.label : 'No description',
          };
          podcasts.push(podcast);
        });
        localStorage.setItem('podcastsListStorage', JSON.stringify(podcasts));
        setPodcastsList(podcasts);
        noLoading();
      } catch (e) {
        console.error('Err:', e);
        noLoading();
      }
    } else {
      isLoading();
      setPodcastsList(getlocalStorage);
      noLoading();
    }
  };
  useEffect(() => {
    loadPodcasts();
  }, []);
  return [podcastsList, setPodcastsList];
}
