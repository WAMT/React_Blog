/* esling-disavle */

import './App.css';
import { useState } from 'react';

function App() {
	const USEFULL = '맛집 추천';
	let [location, setLocation] = useState([
		'나면' + USEFULL,
		'가동' + USEFULL,
		'다이썬' + USEFULL,
	]);

	let [like, setLike] = useState([0, 0, 0]);
	let [modal1, setModal1] = useState(false);

	return (
		<div className='App'>
			<div className='black-nav'>
				<h4>ReactBlog</h4>
			</div>
			{/* <button
                onClick={() => {
                    let copy = [...location];
                    copy.sort();
                    setLocation(copy);
                }}>
                정렬
            </button>
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
            </div> */}
			{location.map(function (a, i) {
				return (
					<div className='list'>
						<h4>
							{location[i]}
							<span
								onClick={() => {
									let copy = [...like];
									copy[i] = copy[i] + 1;
									setLike(copy);
								}}>
								👍🏻
							</span>
							{like[i]}
						</h4>
						<p>9월 1일 발행</p>
					</div>
				);
			})}

			<div>{modal1 == true ? <Modal1 /> : null}</div>
		</div>
	);
}

function Modal1() {
	return (
		<div className='modal1'>
			<h4>제목</h4>
			<p>날짜</p>
			<p>상세내용</p>
		</div>
	);
}
//컴포넌트 시용할때 => 반복적인 html 축약할때 2.큰페이지들 하나씩 가져올때 3.자주변경되는것들
export default App;
