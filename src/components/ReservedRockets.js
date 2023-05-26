/* eslint-disable import/no-extraneous-dependencies */
import { PropTypes } from 'prop-types';

const ReservedRockets = ({ reservedRockets }) => (
  <table>

    {reservedRockets.map((rocket) => (
      <tr key={rocket.id}>

        <td>{rocket.name}</td>
      </tr>
    ))}

  </table>
);

ReservedRockets.propTypes = { reservedRockets: PropTypes.arrayOf(PropTypes.string).isRequired };
export default ReservedRockets;
