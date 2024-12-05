import React from 'react'

const product = () => {
  console.log('Hello')
  const [num, setNum] = useState(0)


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
      <form>
        <input type="text" />
        <buton onSubmit={{}}>Submit</buton>
      </form>
      <h2>Numbers {num}</h2>
      <button onClick={()=>setNum(num+1)}>Increment</button>
			<button onClick={()=>setNum(num-1)}>Decrement</button>

      <div style={{background: data}}>Change {data} color{namesdfg}
			<button onClick={change}>change</button>
    </div>
  )
}
export default product
