/* eslint-disable no-unused-vars */
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import MyMissions from '../profile/Missions';
import styles from './Profiless.module.css';
import { selectsAllMissions } from '../redux/mission/misionSlice';
import ReservedRockets from './ReservedRockets';

function Profile() {
  const { mission } = useSelector(selectsAllMissions);
  const joinMission = mission.filter((mission) => mission.reservation === true);

  const { rockets } = useSelector((store) => store.allRockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserve === true);

  return (
    <div className={styles.mycontainer}>
      <MyMissions data={joinMission} />
      <ReservedRockets reservedRockets={reservedRockets} />
    </div>
  );
}

export default Profile;
