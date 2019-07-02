# Checkbox 多选框
常用的多选框。



## 基本方法
简单的使用Checkbox

```jsx
import { Checkbox } from 'zarm-web';

ReactDOM.render(<Checkbox value='Checkbox' onChange={(e) => console.log('value is ' + e.target.value)}>Checkbox</Checkbox>, mountNode);
```



## 禁用类型
多选框处于不可用状态的情况。

```jsx
import { Checkbox } from 'zarm-web';

ReactDOM.render( 
  <div>
    <Checkbox defaultChecked={false} disabled/>
    <br/>
    <Checkbox defaultChecked={true} disabled/>
    <br/>
    <Checkbox defaultChecked={true} disabled>Checkbox</Checkbox>
  </div>, mountNode
);
```



## 受控组件
将checkbox设为受控组件

```jsx
import { Checkbox, Button } from 'zarm-web';

class Demo extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      checked: true,
      disabled: false
    }
  }
  changeChecked(){
    this.setState({
      checked: !this.state.checked
    })
  }
 
  render() {
    return (
      <div>
        <Checkbox
            checked={this.state.checked}
            disabled={this.state.disabled}
            onChange={this.onChange}
          >
            Checkbox
        </Checkbox>
        <Button onClick={this.changeChecked}>取消选中</Button>
      </div>
    )
  }
}

ReactDOM.render(<Demo />, mountNode);
```



## 不同尺寸
除了默认尺寸外，可以额外设置四种尺寸。

```jsx
import { Button, Icon } from 'zarm-web';

class Demo extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="multi-rows">
          <Button theme="primary" size='xl'>xl尺寸</Button>
          <Button theme="primary" size='lg'>lg尺寸</Button>
          <Button theme="primary">默认尺寸</Button>
          <Button theme="primary" size='sm'>sm尺寸</Button>
          <Button theme="primary" size='xs'>xs尺寸</Button>
        </div>
        <div className="multi-rows">
          <Button shape="round" theme="primary" size='xl'>xl尺寸</Button>
          <Button shape="round" theme="primary" size='lg'>lg尺寸</Button>
          <Button shape="round" theme="primary">默认尺寸</Button>
          <Button shape="round" theme="primary" size='sm'>sm尺寸</Button>
          <Button shape="round" size='xs'>xs尺寸</Button>
        </div>
        <div className="multi-rows">
          <Button shape="circle" theme="primary" size='xl'><Icon type="right" /></Button>
          <Button shape="circle" theme="primary" size='lg'><Icon type="brush" /></Button>
          <Button shape="circle" theme="primary"><Icon type="user-fill" /></Button>
          <Button shape="circle" theme="primary" size='sm'><Icon type="empty-fill" /></Button>
          <Button shape="circle" size='xs'><Icon type="search" /></Button>
        </div>
      </React.Fragment>
    )
  }
}

ReactDOM.render(<Demo />, mountNode);
```



## 幽灵按钮形式
幽灵按钮在背景为有色的情况下使用的按钮形式，以下为几项实例

```jsx
import { Button } from 'zarm-web';

class Demo extends React.Component {
  render() {
    return (
      <div className="ghost-btn-container">
        <Button ghost theme="primary">Ghost</Button>
        <Button ghost disabled theme="primary">禁用状态</Button>
        <Button ghost>Ghost</Button>
        <Button ghost theme="danger">Ghost</Button>
      </div>
    )
  }
}

ReactDOM.render(<Demo />, mountNode);
```



## 加载中
点击按钮后进行数据加载操作，在按钮上显示加载状态。

```jsx
import { Button } from 'zarm-web';

class Demo extends React.Component {
  render() {
    return (
      <div>
        <Button theme="primary" loading>加载中</Button>
        <Button loading>加载中</Button>
        <Button shape="round" loading>加载中</Button>
      </div>
    )
  }
}

ReactDOM.render(<Demo />, mountNode);
```



## 链接按钮
使用a标签代替button, 可设置href, target属性

```jsx
import { Button } from 'zarm-web';

class Demo extends React.Component {
  render() {
    return <Button href="https://www.baidu.com/" theme="primary" target="_blank">百度一下</Button>
  }
}

ReactDOM.render(<Demo />, mountNode);
```

## API

| 属性 | 类型 | 默认值 | 说明 |
| :--- | :--- | :--- | :--- |
| theme | string | 'default' | 设置主题，可选值为 `default`、`primary`、`danger` |
| size | string | 'md' | 设置大小，可选值为 `lg`、`md`、`sm`、`xs` |
| shape | string | 'radius' | 设置形状，可选值为 `rect`、`radius`、`round`、`circle` |
| block | boolean | false | 是否块级元素 |
| ghost | boolean | false | 是否幽灵按钮 |
| disabled | boolean | false | 是否禁用 |
| loading | boolean | false | 是否加载中状态 |
| icon | ReactNode | - | 设置图标 |
| onClick | MouseEventHandler&lt;HTMLAnchorElement&gt; \| MouseEventHandler&lt;HTMLButtonElement&gt; | - | 点击后触发的回调函数 |
| htmlType | string | 'button' | 设置`button`原生的`type`值，可选值为 `button`、`submit`、`reset` |
| href | string | - | 点击跳转的地址，指定此属性`button`的行为和`a`链接一致 |
| target | string | - | 相当于 a 链接的 target 属性，href 存在时生效 |
