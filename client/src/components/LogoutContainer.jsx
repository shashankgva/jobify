import { useState } from 'react';
import Wrapper from '../assets/wrappers/LogoutContainer';
import { useDashboardContext } from '../pages/DashboardLayout';
import { FaCaretDown, FaUserCircle } from 'react-icons/fa';

const LogoutContainer = () => {
  const [showLogout, setShowLogout] = useState(false);
  const { user, logoutUser } = useDashboardContext();

  return (
    <Wrapper>
      <button
        type="button"
        className="btn logout-btn"
        onClick={() => setShowLogout(!showLogout)}
      >
        {user.avatar ? (
          <img src={user.avatar} alt="avatar" className="img" />
        ) : (
          <FaUserCircle />
        )}
        {user?.name}
        <FaCaretDown />
      </button>
      <div className={`dropdown ${showLogout ? 'show-dropdown' : ''}`}>
        <button type="button" onClick={logoutUser} className="dropdown-btn">
          Logout
        </button>
      </div>
    </Wrapper>
  );
};
export default LogoutContainer;
