import style from './Rating.module.css';
import PropTypes from 'prop-types';

export const Rating = ({ ups }) => (
    <div className={style.rating}>
        {/* <Button className={style.up} aria-label='Повысить рейтинг' /> */}
        <button className={style.up} aria-label='Повысить рейтинг' />
        <p className={style.ups}>{ups}</p>
        <button className={style.down} aria-label='Понизить рейтинг' />
        {/* <Button className={style.down} aria-label='Понизить рейтинг' /> */}
    </div>
);

Rating.propTypes = {
    ups: PropTypes.number,
};