import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export const Filter = (props) => {
  const { setFilteredPodcast, podcastsList } = props;

  //Función que filtra al momento y en cliente el listado de podcasts.
  const filterPodcasts = (e) => {
    const filteredPodcasts = podcastsList.filter(
      (podcast) =>
        podcast.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
        podcast.author.toLowerCase().includes(e.target.value.toLowerCase())
    );

    setFilteredPodcast(filteredPodcasts);
  };

  return (
    <Box
      component='form'
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete='off'
    >
      <TextField
        id='outlined-basic'
        variant='outlined'
        placeholder='Filter podcasts...'
        onChange={filterPodcasts}
      />
    </Box>
  );
};
