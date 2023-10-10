import { useNavigate } from 'react-router-dom';
import { TABS } from '../utils/constants';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="w-80">
      <ul className="flex justify-between items-center text-xl cursor-pointer">
        {TABS.map((tab, idx) => {
          return (
            <li
              key={idx}
              className="hover:text-orientalBlue hover:line-through"
              onClick={() => navigate(`${tab.path}`)}
            >
              {tab.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navbar;
