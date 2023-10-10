import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="border">
      <p onClick={() => navigate('/')}>logo</p>
      <ul className="flex flex-row">
        <li onClick={() => navigate('/about')}>About</li>
        <li onClick={() => navigate('/projects')}>Projects</li>
        <li onClick={() => navigate('/contact')}>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
