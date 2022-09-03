/* esling-disavle */

import './App.css';
import { useState } from 'react';

function App() {
  let [location, setLocation] = useState(['가', '다', '나']);
  let [like, setLike] = useState([0, 0, 0]);
  let [modal1, setModal1] = useState(false);
  let [ttle, setTitle] = useState(0);
  let [iinputval, setInputVal] = useState('');
  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

      {location.map(function (a, i) {
        return (
          <div className="list" key={i + i + i + i}>
            <h4
              onClick={() => {
                setModal1(true);
                setTitle(i);
              }}
            >
              {location[i]}
              <span
                onClick={() => {
                  let copy = [...like];
                  copy[i] = copy[i] + 1;
                  setLike(copy);
                }}
              >
                👍🏻
              </span>
              {like[i]}
            </h4>
            <p>9월 1일 발행</p>
            <button
              onClick={() => {
                let copy = [...location];
                copy.splice(i, i + 1);
                setLocation(copy);
              }}
            >
              글 삭제
            </button>
          </div>
        );
      })}

      <input
        onChange={(e) => {
          setInputVal(e.target.value);
        }}
      />
      <button
        onClick={() => {
          let copy = [...location];
          copy.unshift(inputval);
          setLocation(copy);
        }}
      >
        추가
      </button>

      <div>
        {modal1 == true ? (
          <Modal1 color={'skyblue'} location={location} setLocation={setLocation} title={title} />
        ) : null}
      </div>
    </div>
  );
}

function Modal1(props) {
  return (
    <div className="modal1" style={{ background: props.color }}>
      <h4>{props.location[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}
//컴포넌트 시용할때 => 반복적인 html 축약할때 2.큰페이지들 하나씩 가져올때 3.자주변경되는것들
export default App;

{
  /* 
            <div className='list'>
                <h4>
                    {location[0]}
                    <span
                        onClick={() => {
                            setLike(like + 1);
                        }}>
                        👍🏻
                    </span>
                    {like}
                </h4>
                <button
                    onClick={() => {
                        let copy = [...location];
                        copy[0] = '김치맛집 추천';
                        setLocation(copy);
                    }}>
                    변경
                </button>
                <p>9월 1일 발행</p>
            </div>
			<div className='list'>
				<h4>{location[1]}</h4>
				<p>9월 1일 발행</p>
			</div>
				<div className='list'>
				<h4
					onClick={() => {
						setModal1(!modal1);
					}}>
					{location[2]}
				</h4>
				<p>9월 1일 발행</p>
			</div>
				*/
}
{
  /* <button
				onClick={() => {
					let copy = [...props.location];
					copy[0] = '여자 코트 추천';
					props.setLocation(copy);
				}}>
				글수정
			</button> */
}
