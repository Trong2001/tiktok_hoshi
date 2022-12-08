import styles from './Menu.module.scss';
import classNames from 'classnames/bind';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotateLeft } from '@fortawesome/free-solid-svg-icons';


const cx = classNames.bind(styles);

function HeaderMenu({title, onBack}) {
    return (
       <header className={cx('header')}>
        <button className={cx('back-language')} onClick={onBack}>
            <FontAwesomeIcon icon={faRotateLeft}/>
        </button>
        <h4 className={cx('title-language')}>{title}</h4>
       </header>
    );
}

export default HeaderMenu;
