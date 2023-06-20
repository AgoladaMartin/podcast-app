import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link, useParams } from 'react-router-dom';
import { useLoadPodcastEpisodes } from '../../hooks/useLoadPodcastEpisodes';
import { linkStyle } from '../../utils/linksCss';
import { useStore } from '../../store/store';
import { useEffect } from 'react';

export const PodcastEpisodes = (props) => {
  //Importamos las funciones para cuando está cargando el componente
  const isLoading = useStore((state) => state.isLoading);
  const noLoading = useStore((state) => state.noLoading);
  //Ponemos en true el loading al cargar el componente

  //Recibimos el Id del podcast de los params
  const { id } = useParams();

  //Le enviamos el Id a la función encargada de la llamada al api
  const [podcastEpisodes] = useLoadPodcastEpisodes(id);

  //Código de material ui para mostrar la tabla
  function createData(title, date, duration, id, url, description) {
    return { title, date, duration, id, url, description };
  }
  const rows = podcastEpisodes
    ? podcastEpisodes?.map((podcast) =>
        createData(
          podcast.title,
          podcast.date,
          podcast.duration,
          podcast.id,
          podcast.url,
          podcast.description
        )
      )
    : '';

  //Creamos una variable que define lo que se va a renderizar con un ternario,
  //si existe el listado de podcast se muestra, y si no, no se renderiza nada.
  const render = podcastEpisodes ? (
    <div id='episodeTable'>
      <p>Episodes: {podcastEpisodes.length}</p>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell align='center'>Date</TableCell>
              <TableCell align='center'>Duration</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component='th' scope='row'>
                  <Link
                    to={`http://localhost:3000/podcast/${id}/episode/${row.id}`}
                    state={row}
                    style={linkStyle}
                  >
                    {row.title}
                  </Link>
                </TableCell>
                <TableCell align='right'>
                  <Link
                    to={`http://localhost:3000/podcast/${id}/episode/${row.id}`}
                    state={row}
                    style={linkStyle}
                  >
                    {row.date}
                  </Link>
                </TableCell>
                <TableCell align='right'>
                  <Link
                    to={`http://localhost:3000/podcast/${id}/episode/${row.id}`}
                    state={row}
                    style={linkStyle}
                  >
                    {row.duration}
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  ) : (
    ''
  );
  //Ponemos en false el loading cuando termina de cargar

  return render;
};
