import { NavLink } from 'react-router-dom';
import { TABS } from '../utils/constants';

const Navbar = () => {
  return (
    <div className="w-80">
      <ul className="flex justify-between items-center text-xl cursor-pointer">
        {TABS.map((tab, idx) => {
          return (
            <li
              key={idx}
              className="hover:text-orientalBlue hover:line-through"
            >
              <NavLink
                to={tab.path}
                className={({ isActive }) =>
                  isActive ? 'text-orientalBlue line-through' : ''
                }
              >
                {tab.title}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navbar;
