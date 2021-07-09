import './value.scss';

function Value(props) {
  return (
    <div className='value'>
      <label>
      <input 
      type="text" 
      value={props.payload}
      size="5"
      />
      </label>
    </div>
  );
}

export default Value;