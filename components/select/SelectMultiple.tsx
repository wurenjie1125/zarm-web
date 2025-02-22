import React, { Component, ReactElement } from 'react';
import classnames from 'classnames';
import Option from './Option';
import Menu from '../menu';
import { MultipleProps } from './PropsType';

class SelectMultiple extends Component<MultipleProps, any> {
  static defaultProps = {
    prefixCls: 'za-select',
    isRadius: false,
    isDisabled: false,
    onChange: () => {},
    onDoubleClick: () => {},
  };

  constructor(props) {
    super(props);
    this.state = {
      value:
        props.value
        || props.defaultValue
        || this.getCheckedValue(props.children),
    };
  }

  componentWillReceiveProps(nextProps) {
    if ('value' in nextProps || this.getCheckedValue(nextProps.children)) {
      this.setState({
        value: nextProps.value || this.getCheckedValue(nextProps.children),
      });
    }
  }

  // eslint-disable-next-line
  getCheckedValue(children) {
    const checkedValue = [];
    React.Children.forEach(children, (option) => {
      if ((option as ReactElement<any>).props && (option as ReactElement<any>).props.checked) {
        checkedValue.push((option as ReactElement<any>).props.value as never);
      }
    });
    return checkedValue;
  }

  // eslint-disable-next-line
  onSelectClick(e) {
    e.preventDefault();
  }

  onOptionChange(e, props, rowIndex) {
    if ('disabled' in props) {
      return;
    }

    const { shiftKey } = e;
    const { value } = this.state;
    const { onChange } = this.props;
    const index = value.indexOf(props.value);
    const isSelected = index > -1;

    if (isSelected && !shiftKey) {
      value.splice(index, 1);
    } else if (!isSelected) {
      value.push(props.value);
    }

    const row = {
      index: rowIndex,
      value: props.value,
      text: props.children,
      selected: !isSelected,
    };

    this.setState({ value }, () => onChange(value, row, shiftKey));
  }

  render() {
    const {
      prefixCls, size, style, onDoubleClick, children,
    } = this.props;
    const { value, dropdown } = this.state;
    const disabled = 'disabled' in this.props;
    const radius = 'radius' in this.props;

    // eslint-disable-next-line
    let childrenNode = React.Children.map(children, (option, index) => {
      return (
        <Option
          {...(option as ReactElement<any>).props}
          onDoubleClick={onDoubleClick}
          onChange={e => this.onOptionChange(e, (option as ReactElement<any>).props, index)}
          checked={!!(value.indexOf((option as ReactElement<any>).props.value) > -1)}
        />
      );
    });

    const cls = classnames({
      [prefixCls!]: true,
      [`${prefixCls}--open`]: dropdown,
      'is-disabled': disabled,
      'is-radius': radius,
      [`size-${size}`]: !!size,
    });

    return (
      <span className={cls} style={style}>
        <span
          className={`${prefixCls}__selection`}
          style={{ height: '100%', maxHeight: 250, overflow: 'auto' }}
          aria-autocomplete="list"
          aria-haspopup="true"
          aria-expanded="false"
          onClick={e => !disabled && this.onSelectClick(e)}
        >
          <Menu size={size}>{childrenNode}</Menu>
        </span>
      </span>
    );
  }
}

export default SelectMultiple;
