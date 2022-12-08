import Button from '~/components/Button';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    return (
        <div className={cx('menu-btn')}>
            <Button to={data.to} className={cx('item-btn')} onClick={onClick}>
                {data.icon}  {data.title}
            </Button>
        </div>
    );
}

export default MenuItem;
