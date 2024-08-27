"use client"

import React, { useEffect, useState } from 'react'


const RandomKanjiPage = () => {
	const [kanjiOfDay, setKanjiOfDay] = useState('');


	const handleGenerateNewKanji = () => {
		const kanjiStart = 0x4E00;
		const kanjiEnd = 0x9FFF;
		const randomKanjiCodePoint = Math.floor(Math.random() * (kanjiEnd - kanjiStart + 1)) + kanjiStart;
		const randomKanji = String.fromCodePoint(randomKanjiCodePoint);
		setKanjiOfDay(randomKanji);
	}

	useEffect(() => {

	});
	
	return (
	<>
		<div className="p-2 text-3xl">
		Kanji Randomizer
		</div>
		<div className="container py-10 mx-auto grid flex-col justify-center">
			<div className="flex items-center justify-center align-middle box-sizing h-96 w-96 bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl">
				<div>
					{kanjiOfDay ? <div className="text-9xl">{kanjiOfDay}</div> : <div className="text-xl">Click Generate to starrt learning!</div>}
				</div>
			</div>
			
			<div className="relative p-5 flex justify-center">
				<button
					type='button'
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
					onClick={handleGenerateNewKanji}
					>
					Generate
				</button>
			</div>
		</div>
		
	</>

  )
}

export default RandomKanjiPage