import style from './Filter.module.css';
import PropTypes from 'prop-types';

export default function Filter({ value, onChange }) {
    return (
  <div className={style.filter}>
    <label className={style.labelFilter}>
      Filter
      <input
        type="name"
        value={value}
        onChange={onChange}
        className={style.filterInput}
      />
    </label>
  </div>
);
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
