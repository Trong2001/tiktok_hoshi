import styles from './AccountItem.module.scss'
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';


const cx = classNames.bind(styles)


function AccountItem() {
    return ( 
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src='https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/26d4538bb101d4f6d7e191100740647f~c5_100x100.jpeg?x-expires=1669824000&x-signature=V2NmA2o1F5tic8bAOfkxeKyJqwI%3D' alt='Name'/>
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Xuan Trong</span>
                    <FontAwesomeIcon className={cx('checkicon')} icon={faCheckCircle}/>
                    </h4>
                <span className={cx('username')}>hoshi2k1</span>
            </div>
        </div>
     );
}

export default AccountItem;