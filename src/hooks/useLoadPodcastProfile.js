import { useState, useEffect } from 'react';

export function useLoadPodcastProfile(id) {
  const [businessProfileInfo, setBusinessProfileInfo] = useState('');
  const loadBusinessProfile = async () => {
    try {
      const res = await fetch(
        `https://itunes.apple.com/lookup?id=1535809341${id}`,
        {
          method: 'GET',
        }
      );
      const body = await res.json();

      setBusinessProfileInfo(body.data);
    } catch (e) {
      console.error('Err:', e);
    }
  };
  useEffect(() => {
    loadBusinessProfile();
  }, []);
  return [businessProfileInfo, setBusinessProfileInfo];
}
