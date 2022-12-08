import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import MenuItem from './MenuItem';
import { Wrapper as PopperWrapper } from '~/components/Popper';

import Tippy from '@tippyjs/react/headless';
import HeaderMenu from './HeaderMenu';
import { useState } from 'react';
const cx = classNames.bind(styles);

const defaultFn = () => {};

function Menu({ children, items = [], onChange = defaultFn }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    const renderItem = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            console.log(item.children);
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };
    return (
        <Tippy
            visible
            interactive
            placement="bottom-end"
            arrow="true"
            delay={[0, 500]}
            render={(attrs) => (
                <div className={cx('menu-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <HeaderMenu title={'Language'} />
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
