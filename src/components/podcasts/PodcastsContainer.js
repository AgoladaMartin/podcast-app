import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { useLoadPodcasts } from '../../hooks/useLoadPodcasts';

function createData(name, id, img, author, summary) {
  return { name, id, img, author, summary };
}

export const PodcastsContainer = () => {
  const [podcastsList] = useLoadPodcasts();
  const rows = podcastsList.map((podcast) =>
    createData(
      podcast.name,
      podcast.id,
      podcast.img,
      podcast.author,
      podcast.summary
    )
  );

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell align='right'>id</TableCell>
            <TableCell align='right'>img</TableCell>
            <TableCell align='right'>author</TableCell>
            <TableCell align='right'>summary</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component='th' scope='row'>
                {row.name}
              </TableCell>
              <TableCell align='right'>{row.id}</TableCell>
              <TableCell align='right'>
                <img src={row.img} alt='imagen podcast'></img>
              </TableCell>
              <TableCell align='right'>{row.author}</TableCell>
              <TableCell align='right'>{row.summary}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PodcastsContainer;
