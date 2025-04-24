import { NavLink } from 'react-router-dom';
import { useDashboardContext } from '../pages/DashboardLayout';
import links from '../utils/links';

const NavLinks = ({ isBigSidebar }) => {
  const { toggleSidebar, user } = useDashboardContext();
  return (
    <div className="nav-links">
      {links.map((link) => {
        const { text, icon, path } = link;
        if (path === 'admin' && user.role !== 'admin') return;
        return (
          <NavLink
            key={text}
            to={path}
            className="nav-link"
            onClick={!isBigSidebar && toggleSidebar}
            end
          >
            <span className="icon">{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};
export default NavLinks;
