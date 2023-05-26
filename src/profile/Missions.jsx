/* eslint-disable react/prop-types */
import styles from './Mission.module.css';

function MyMissions({ data }) {
  return (
    <div className={styles.ourMission}>
      <h2>My Missions</h2>
      <ul>
        {data.map((mission) => (
          <li key={mission.id}>{mission.mission_name}</li>
        ))}
      </ul>
    </div>
  );
}

export default MyMissions;
