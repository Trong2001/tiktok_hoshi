import Button from '~/components/Button';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function MenuItem({ data }) {
    return (
        <div className={cx('menu-btn')}>
            <Button to={data.to} className={cx('item-btn')}>
                {data.icon}  {data.title}
            </Button>
        </div>
    );
}

export default MenuItem;
