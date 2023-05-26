import { useDispatch, useSelector } from 'react-redux';
import { reserve, removeReserve } from '../redux/rocket/rocketSlice';

const Rocket = () => {
  const { rockets } = useSelector((store) => store.allRockets);

  const dispatch = useDispatch();

  const handleReserve = (e) => {
    e.preventDefault();
    const rocketId = e.target.id;
    const rocket = rockets.find((rocket) => rocket.id === rocketId);
    if (rocket.reserve) {
      dispatch(removeReserve(rocketId));
    } else {
      dispatch(reserve(rocketId));
    }
  };

  return (
    <table>
      {rockets.map((rocket) => (
        <tr key={rocket.id}>
          <td>
            {rocket.flickr_images.length > 0 && (
              <img src={rocket.flickr_images[0]} alt="Rocket" />
            )}
          </td>
          <td>
            <ul>
              <li><h3>{rocket.name}</h3></li>
              <li>
                <p>
                  {rocket.reserve ? <span className="banner">RESERVED</span> : null }
                  {rocket.description}
                </p>
              </li>
              <li><button id={rocket.id} type="button" className="reserver" onClick={handleReserve}>{rocket.reserve ? 'Cancel Reservation' : 'Reserve Rocket'}</button></li>
            </ul>
          </td>
        </tr>

      ))}
    </table>
  );
};

export default Rocket;
