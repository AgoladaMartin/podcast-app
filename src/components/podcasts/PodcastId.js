import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useLocation, useParams } from 'react-router-dom';
import { useLoadPodcastProfile } from '../../hooks/useLoadPodcastProfile';
import { useLoadPodcasts } from '../../hooks/useLoadPodcasts';

export const PodcastsId = (props) => {
  //Recibimos el Id del podcast de los params
  const { id } = useParams();

  //Le enviamos el Id a la función encargada de la llamada al api
  const [podcastProfile] = useLoadPodcastProfile(id);

  //Accedemos a la variable description filtrando el array por el id del podcast
  const [podcastsList] = useLoadPodcasts();
  const description = podcastsList.filter((podcast) => podcast.id === id);

  return (
    <div id='podcastId'>
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
            {description[0]?.summary}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};
