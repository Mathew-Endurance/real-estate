// import styled from "styled-components";
// import Product from "./Product";
// import React from "react";

// // const Login = () => {
// //   return (
// //     <div>Login</div>
// //   )
// // }

// // export default Login

// const Login = ({ Product }) => {
//   return (
//     <Wrapper>
//       <div className="sub-main">
//         <div>
//           <div className="imgs">
//             <div className="container-image">
//               <img src={agent} alt="profile" className="profile" />
//             </div>
//           </div>
//           <div>
//             <h1>Agent </h1>
//             <p> Hi, i am {name}</p>
//             <div>
//               <img src={email} alt="email" className="email" />
//               <input type="text" placeholder="user name" className="name" />
//             </div>
//             <div className="second-input">
//               <img src={agentname} alt="pass" className="email" />
//               <input type="password" placeholder="user name" className="name" />
//             </div>
//             <div className="login-button">
//               <button>Login</button>
//             </div>

//             <p className="link">
//               <a href="#">Forgot password ?</a> Or<a href="#">Sign Up</a>
//             </p>
//           </div>
//         </div>
//       </div>
//     </Wrapper>
//   );
// };

// const Wrapper = styled.section`
//   .main {
//     text-align: center;
//     justify-content: center;
//     display: flex;
//     padding-top: 90px;
//     padding-bottom: 90px;
//     background-color: #e1e3eb;
//   }
//   .sub-main {
//     display: flex;
//     justify-content: center;
//     height: 550px;
//     width: 35%;
//     box-shadow: 11px 12px 13px 12px rgb(207, 207, 207);
//     padding-top: 30px;
//     border-radius: 60px;
//     background-color: white;
//   }
//   .imgs {
//     padding-top: 20px;
//     justify-content: center;
//     display: flex;
//   }
//   .container-image {
//     background-color: rgb(223, 221, 221);
//     border-radius: 150px;
//     align-items: center;
//     display: flex;
//     justify-content: center;
//     height: 115px;
//     width: 115px;
//   }
//   .profile {
//     height: 100px;
//     width: 100px;
//     border-radius: 130px;
//   }

//   input {
//     width: 300px;
//     height: 50px;
//     border-radius: 60px;
//     box-shadow: inset 0px 0px 25px 0px #888;
//     border: none;
//     outline: none;
//     background-color: #fff;
//   }

//   .email {
//     height: 25px;
//     width: 25px;
//     position: absolute;
//     padding: 14px 0 0 25px;
//   }

//   .name {
//     padding-left: 70px;
//     font-size: 20px;
//   }
//   .second-input {
//     padding-top: 20px;
//   }

//   button {
//     width: 380px;
//     height: 50px;
//     border-radius: 60px;
//     background-color: #b103fc;
//     color: white;
//     font-size: 25px;
//     border: none;
//   }
//   .login-button {
//     padding-top: 25px;
//   }

//   .link {
//     font-size: 25px;
//     font-weight: 400;
//   }
//   a {
//     color: blue;
//   }
// `;

// export default Login;