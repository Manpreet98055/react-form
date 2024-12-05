import React, { useState } from 'react'
const Home = ({ namesdfg }) => {
const [num, setnum] = useState(0)
	const [data, setData,] = useState("red",);

	const change = () => {
		if (data === 'red') {

			setData('green')
		}
		else {
			setData('red')
		}
	}
	
	return (
		<div>
		<div style={{background: data}}>Change {data} color{namesdfg}
			<button onClick={change}>change</button>
<h1>Number{num}</h1>
<button onClick={()=>setnum(num+1)}>increase</button>
<button onClick={()=>setnum(num-1)}>dicrement</button>			
		</div>
	</div>
	);
};

export default Home