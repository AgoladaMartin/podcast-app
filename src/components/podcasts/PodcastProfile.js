import { PodcastsId } from './PodcastId';
import { PodcastEpisodes } from './PodcastEpisodes';
import './podcastProfile.css';
import { EpisodeDetail } from './EpisodeDetail';

export const PodcastProfile = () => {
  return (
    <div id='podcastProfile'>
      <PodcastsId></PodcastsId>
      <PodcastEpisodes></PodcastEpisodes>
    </div>
  );
};
