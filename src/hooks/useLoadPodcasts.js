import { useState, useEffect } from 'react';
export function useLoadPodcasts() {
  const [podcastsList, setPodcastsList] = useState([]);
  const loadPodcasts = async () => {
    try {
      const res = await fetch(
        'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json',
        {
          method: 'GET',
        }
      );
      const body = await res.json();

      setPodcastsList(body);
    } catch (e) {
      console.error('Err:', e);
    }
  };
  useEffect(() => {
    loadPodcasts();
  }, []);
  return [podcastsList, setPodcastsList];
}
