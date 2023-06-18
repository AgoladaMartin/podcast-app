import { Link } from 'react-router-dom';
import { headerStyle } from '../../utils/linksCss';
import './header.css';

export const Header = () => {
  return (
    <>
      <Link to={'/'} style={headerStyle}>
        <h1> Podcaster</h1>
      </Link>
      <hr></hr>
    </>
  );
};
