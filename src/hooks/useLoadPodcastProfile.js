import { useState, useEffect } from 'react';

//Función que llama al api para cargar el perfil de un podcast concreto a través de su id
export function useLoadPodcastProfile(id) {
  const [podcastProfile, setPodcastProfile] = useState('');
  const loadPodcastProfile = async () => {
    try {
      const res = await fetch(
        `https://corsproxy.io/?https://itunes.apple.com/lookup?id=${id}&entity=podcastEpisode`,
        {
          method: 'GET',
        }
      );
      const body = await res.json();

      setPodcastProfile(body.results[0]);
    } catch (e) {
      console.error('Err:', e);
    }
  };
  useEffect(() => {
    loadPodcastProfile();
  }, []);
  return [podcastProfile, setPodcastProfile];
}
