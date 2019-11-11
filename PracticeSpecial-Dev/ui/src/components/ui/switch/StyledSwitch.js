import styled from 'styled-components'

const Switch = styled.div `
  width: 0.34rem;
  height: 0.17rem;

  /* 设置 checkbox 不显示 */
  .switch {
    display: none;
  }

  /* 设置 label 标签为椭圆状 */
  label {
    display: block;
    background-color: #adadad;
    width: 0.34rem;
    height: 0.14rem;
    border-radius: 0.07rem;
    position: relative;
    transition: all 0.3s ease;
  }

  /* 在 label 标签内容之前添加如下样式，形成一个未选中状态 */
  label:before {
    content: '';
    display: block;
    border-radius: 50%;
    height: 0.17rem;
    width: 0.17rem;
    background: #eee;
    position: absolute;
    left: 0;
    top: -0.015rem;
    transition: all 0.3s ease;
  }

  /* 选中后 label 的背景色改变 */
  .switch:checked~label {
    background-color: #b4b8ff;
  }

  /* 选中后，未选中样式消失 */
  .switch:checked~label:before {
    left: 0.17rem;
    background: #6b72ff;
  }
`
export default Switch
