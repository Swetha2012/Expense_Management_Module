import React, {useState,useEffect} from 'react'

function ChangeTitle() {
  
	const [name, setName] = useState('')
	useEffect(() => {
		document.title = name
	}, [name])
	return (
		<div>
			<input type="text" value={name} onChange={e => setName(e.target.value)} />
		</div>
	)
}

export default ChangeTitle