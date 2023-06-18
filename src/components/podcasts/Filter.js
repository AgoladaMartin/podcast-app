import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export const Filter = () => {
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
      />
    </Box>
  );
};
