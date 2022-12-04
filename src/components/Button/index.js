import styles from './Button.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    primary = false,
    upload = false,
    outline = false,
    small = false,
    big = false,
    round= false ,
    children,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classnames = cx('wrapper', {
        primary,
        upload,
        outline,
        small,
        big,
        round,
    });
    return (
        <Comp className={classnames} {...props}>
            <span>{children}</span>
        </Comp>
    );
}

export default Button;
