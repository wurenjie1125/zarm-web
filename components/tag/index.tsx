import React, { Component, MouseEvent } from 'react';
import classnames from 'classnames';
import Icon from '../icon';
import PropsType from './PropsType';

const Style = {
  iconStyle: { position: 'absolute', right: 3, top: 0, cursor: 'pointer' },
};

class Tag extends Component<PropsType, any> {
  static defaultProps = {
    theme: 'default',
    size: null,
  };

  render() {
    const {
      theme,
      size,
      isRadius,
      isRound,
      isActive,
      isFocus,
      isDisabled,
      className,
      onClose,
      children,
      style,
      title,
    } = this.props;
    const disabled = 'disabled' in this.props || isDisabled;

    const cls = classnames({
      'ui-tag': true,
      radius: 'radius' in this.props || isRadius,
      round: 'round' in this.props || isRound,
      active: 'active' in this.props || isActive,
      focus: 'focus' in this.props || isFocus,
      disabled,
      hasCloseButton: typeof onClose === 'function',
      [`theme-${theme}`]: !!theme,
      [`size-${size}`]: !!size,
      [(className as string)]: !!className,
    });

    const closeIcon = typeof onClose === 'function' ? (
      <Icon
        style={Style.iconStyle}
        type="wrong"
        onClick={(e: MouseEvent) => { if (!disabled) { onClose(e); } }}
      />
    ) : null;
    return (
      <div className={cls} style={style} title={title}>
        {children}
        {closeIcon}
      </div>
    );
  }
}

export default Tag;
