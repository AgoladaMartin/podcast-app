import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export const Filter = (props) => {
  const { setFilteredPodcast, podcastsList } = props;

  const filterPodcasts = (e) => {
    const filteredPodcasts = podcastsList.filter(
      (podcast) =>
        podcast.name.includes(e.target.value) ||
        podcast.author.includes(e.target.value)
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
