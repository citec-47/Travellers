import { NavLink } from 'react-router-dom';
import img from '../asset/planet.png';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <header className={styles.Navbar}>
      <div className={styles.logos}>
        <img src={img} alt="planet" />
        <h1>Space Traveler&apos;s Hub</h1>
      </div>
      <nav>
        <ul className={styles.menus}>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? styles.active : styles.inActive)}
              to="/"
            >
              Rockets
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? styles.active : styles.inActive)}
              to="/Missions"
            >
              Missions
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? styles.active : styles.itsActive)}
              to="/Profile"
            >
              My Profile
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
