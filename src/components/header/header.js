import { Link } from 'react-router-dom';
import { headerStyle } from '../../utils/linksCss';
import { useStore } from '../../store/store';
import './header.css';

export const Header = () => {
  const loading = useStore((state) => state.loading);
  //Si loading es true, mostramos el spinner, de lo contrario se oculta
  return (
    <>
      <div className='header'>
        <Link to={'/'} style={headerStyle}>
          <h1> Podcaster</h1>
        </Link>
        {loading ? <div id='spinner'></div> : ''}
      </div>
      <hr></hr>
    </>
  );
};
