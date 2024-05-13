import React, { Component } from "react";

// 클래스
// class MyName extends Component {
//   static defaultProps = {
//     name: "ssooyya",
//   };

//   render() {
//     return (
//       <div>
//         안녕하세요! 제 이름은 <b>{this.props.name}</b> 입니다!
//       </div>
//     );
//   }
// }

// MyName.defaultProps = {
//   name: "ssooyya",
// };

// 함수형
const MyName = ({ name }) => {
  return <div>안녕하세요 제 이름은 {name} 입니다</div>;
};
MyName.defaultProps = {
  name: "ssooyya",
};

export default MyName;
