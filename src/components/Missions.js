/* eslint-disable import/extensions */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchMissions,
  misionsStatus,
  selectsAllMissions,
} from '../redux/mission/misionSlice';
import style from './mission.module.css';

import Button from '../missionButton/Boton';

const Mission = () => {
  const { mission } = useSelector(selectsAllMissions);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);
  const [reservation, setIsreservation] = useState(false);

  const handlemissions = (id) => {
    dispatch(misionsStatus(id));
    setIsreservation(!reservation);
  };
  return (
    <div className={style.container}>
      <table>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th className={style.stutus}>Status</th>
            <th className={style.but_join}> </th>
          </tr>
        </thead>
        <tbody>
          {mission.map((mission, e) => (
            <tr
              key={mission.mission_id}
              className={e % 2 === 0 ? style.white : style.grey}
            >
              <td className={style.title}>{mission.mission_name}</td>
              <td className={style.desc}>{mission.description}</td>
              <td className={style.stutus_update}>
                <span
                  className={mission.reservation ? style.member : style.nmember}
                >
                  {mission.reservation ? 'Active Member' : 'Not a member'}
                </span>
              </td>
              <td className={style.stutus_update}>
                <Button
                  title={mission.reservation ? 'Leave mission' : 'Join Mission'}
                  className={mission.reservation ? style.btn : style.joind}
                  onReserve={() => handlemissions(mission.mission_id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Mission;
