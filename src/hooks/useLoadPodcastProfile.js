import { useState, useEffect } from 'react';
const CORS_PROXY = 'https://cors.io/?';

export function useLoadPodcastProfile(id) {
  const [podcastProfile, setPodcastProfile] = useState('');
  const loadBusinessProfile = async () => {
    try {
      const res = await fetch(
        `https://api.allorigins.win/raw?url=https://itunes.apple.com/lookup?id=${id}&entity=podcastEpisode`,
        {
          method: 'GET',
        }
      );
      const body = await res.json();

      setPodcastProfile(body.results[0]);
      console.log('hoooook', podcastProfile);
    } catch (e) {
      console.error('Err:', e);
    }
  };
  useEffect(() => {
    loadBusinessProfile();
  }, []);
  return [podcastProfile, setPodcastProfile];
}
