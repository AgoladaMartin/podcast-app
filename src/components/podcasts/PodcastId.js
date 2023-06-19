import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useLocation, useParams } from 'react-router-dom';
import { useLoadPodcastProfile } from '../../hooks/useLoadPodcastProfile';

export const PodcastsId = (props) => {
  //Recibimos el Id del podcast de los params
  const { id } = useParams();

  //Le enviamos el Id a la función encargada de la llamada al api
  const [podcastProfile] = useLoadPodcastProfile(id);

  //Recibimos la descripción del podcast a través del componente Link mediante el objeto location
  const location = useLocation();

  //Accedemos a la variable descrition a través de la propiedad state del objeto location
  const description = location.state;

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
            {description}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};
