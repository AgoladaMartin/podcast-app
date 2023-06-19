import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useParams } from 'react-router-dom';
import { useLoadPodcastEpisodes } from '../../hooks/useLoadPodcastEpisodes';

export const PodcastEpisodes = (props) => {
  //Recibimos el Id del podcast de los params
  const { id } = useParams();

  //Le enviamos el Id a la función encargada de la llamada al api
  const [podcastEpisodes] = useLoadPodcastEpisodes(id);

  //Código de material ui para mostrar la tabla
  const columns = [
    { id: 'title', label: 'Title', minWidth: 170 },
    { id: 'date', label: 'Date', minWidth: 100 },
    {
      id: 'duration',
      label: 'Duration',
      minWidth: 100,
    },
  ];
  function createData(title, date, duration) {
    return { title, date, duration };
  }
  const rows = podcastEpisodes
    ? podcastEpisodes?.map((podcast) =>
        createData(podcast.title, podcast.date, podcast.duration)
      )
    : '';
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  //Creamos una variable que define lo que se va a renderizar con un ternario,
  //si existe el listado de podcast se muestra, y si no, no se renderiza nada.
  const render = podcastEpisodes ? (
    <div id='episodeTable'>
      <p>Episodes: {podcastEpisodes.length}</p>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label='sticky table'>
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role='checkbox'
                      tabIndex={-1}
                      key={row.code}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === 'number'
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component='div'
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  ) : (
    ''
  );

  return render;
};
