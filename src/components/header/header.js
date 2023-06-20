import { Link } from 'react-router-dom';

import { headerStyle } from '../../utils/linksCss';
import './header.css';
import { useStore } from '../../store/store';

export const Header = () => {
  const loading = useStore((state) => state.loading);

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
