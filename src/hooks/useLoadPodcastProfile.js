import { useState, useEffect } from 'react';
//Importamos función para saber si local storage lleva más de un dia
import { storageOutDated } from '../utils/storageOutDated';

//Función que llama al api para cargar el perfil de un podcast concreto a través de su id
export function useLoadPodcastProfile(id) {
  const [podcastProfile, setPodcastProfile] = useState('');

  //Creamos una constante con los datos de local storage
  const getlocalStorage = JSON.parse(
    localStorage.getItem(`podcastProfileStorage${id}`)
  );
  const loadPodcastProfile = async () => {
    if (storageOutDated(getlocalStorage)) {
      try {
        const res = await fetch(
          `https://corsproxy.io/?https://itunes.apple.com/lookup?id=${id}&entity=podcastEpisode`,
          {
            method: 'GET',
          }
        );
        const body = await res.json();

        localStorage.setItem(
          `podcastProfileStorage${id}`,
          JSON.stringify(body.results[0])
        );

        setPodcastProfile(body.results[0]);
      } catch (e) {
        console.error('Err:', e);
      }
    } else {
      setPodcastProfile(getlocalStorage);
    }
  };
  useEffect(() => {
    loadPodcastProfile();
  }, []);
  return [podcastProfile, setPodcastProfile];
}
