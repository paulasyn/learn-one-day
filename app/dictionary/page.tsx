"use client"

import React, { useState } from 'react'

const DictionaryPage = () => {

	const [word, setWord] = useState('');
	const handleWordInput = (
		event: React.ChangeEvent<HTMLInputElement>
	  ) => {
		setWord(event.target.value);
	  };
	return (
		<>
		<div>Dictionary Page</div>
		<div>
			<input
				type="text"
				value={word}
				onChange={handleWordInput}
				placeholder="Enter a character"
			/>
		</div>
	</>

  )
}

export default DictionaryPage