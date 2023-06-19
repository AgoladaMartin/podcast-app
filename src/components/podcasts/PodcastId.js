import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useLocation, useParams } from 'react-router-dom';
import { useLoadPodcastProfile } from '../../hooks/useLoadPodcastProfile';

export const PodcastsId = () => {
  const { id } = useParams();

  const [podcastProfile] = useLoadPodcastProfile(id);

  const location = useLocation();

  return (
    <Card sx={{ maxWidth: 345 }} className='cardProfile'>
      <CardMedia
        sx={{ height: 140 }}
        image={podcastProfile.artworkUrl600}
        title={podcastProfile.collectionName}
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {podcastProfile.collectionName}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          by {podcastProfile.artistName}
        </Typography>
        <hr></hr>
        <Typography variant='body2' color='text.secondary'>
          <h4>Description:</h4>
          {location.state}
        </Typography>
      </CardContent>
    </Card>
  );
};
