/* eslint-disable react/prop-types */
function Button({
  title, onReserve, className, id,
}) {
  return (
    <button id={id || ''} type="button" onClick={onReserve} className={className}>
      {title}
    </button>
  );
}

export default Button;
