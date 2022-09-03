/* esling-disavle */
// 1. use Effect(() => {});
// 2. use Effect(() => {},[]);
// 3. const [name, setName] = useState("ash");
//    use Effect(() => {}, [name])

import './App.css';
// import { useState } from 'react';
import React, { useEffect, useState } from 'react';

const Number = () => {
  const [number, setNumber] = useState(0);
  const [name, setName] = useState('ash');

  useEffect(() => {
    console.log('hello');
  });

  const counter = () => {
    setNumber(number + 1);
  };
  const changeName = () => {
    setName('josh');
  };
  return (
    <div>
      <button onClick={counter}>숫자</button>
      <button onClick={changeName}>이름</button>
      <div>{number}</div>
      <div>{name}</div>
    </div>
  );
};

export default Number;

// function App() {
//   let [location, setLocation] = useState(['가가가가가가', '나나나나나나', '다다다다다']);
//   let [like, setLike] = useState([0, 0, 0]);
//   let [input, setInput] = useState('');
//   let [modal, setModal] = useState(false);
//   let [title, setTitle] = useState(0);
//   return (
//     <div className="App">
//       <div className="black-nav">
//         <h4>React Blog</h4>
//       </div>
//       {location.map(function (a, i) {
//         return (
//           <div className="list" key={i}>
//             <h3
//               onClick={() => {
//                 setModal(!modal);
//                 setTitle(i);
//               }}
//             >
//               {/* 글제목생성 */}
//               {location[i] + ' '}
//               {/* 좋아요 */}
//               <span
//                 onClick={() => {
//                   let copy = [...like];
//                   copy[i] = copy[i] + 1;
//                   setLike(copy);
//                 }}
//               >
//                 👍🏻 {like[i]}
//               </span>
//             </h3>
//             <h4>내용</h4>
//             <h4>
//               발행일 : 2022-05-22
//               {/* 글삭제 버튼 */}
//               <button
//                 style={{ margin: '15px' }}
//                 onClick={() => {
//                   let copy = [...location];
//                   copy.splice(i, i + 1);
//                   setLocation(copy);
//                 }}
//               >
//                 글 삭제
//               </button>
//             </h4>
//           </div>
//         );
//       })}
//       <div>
//         <h2>
//           <input
//             onChange={(e) => {
//               setInput(e.target.value);
//             }}
//           />
//           <button
//             onClick={() => {
//               let copy = [...location];
//               copy.unshift(input);
//               setInput(copy);
//             }}
//           >
//             글 추가
//           </button>
//         </h2>
//       </div>
//       {modal == true ? <Modal1 location={location} title={title} /> : null};
//     </div>
//   );
// }
// function Modal1(props) {
//   return (
//     <div className="modal1">
//       <h3>{props.location[props.title]}</h3>
//       <p>세부내용</p>
//     </div>
//   );
// }
// export default App;
