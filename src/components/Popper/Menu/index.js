import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import MenuItem from './MenuItem';
import { Wrapper as PopperWrapper } from '~/components/Popper';

import Tippy from '@tippyjs/react/headless';
const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
    const renderItem = () => {
        return items.map((item, index) => <MenuItem key={index} data={item} />);
    };
    return (
        <Tippy
            interactive
            placement="bottom-end"
            arrow={true}
            delay={[0, 500]}
            render={(attrs) => (
                <div className={cx('menu-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        {renderItem()}
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
