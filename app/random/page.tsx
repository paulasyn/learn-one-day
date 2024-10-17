"use client"

import React, { useEffect, useState } from 'react'
import JoyouInit from '../dictionary/JoyouInit';

interface KanjiInfo {
	kanji: string;
	grade: number;
	meanings: string[];
	on_readings: string[];
	kun_readings: string[];
	stroke_count: number;
	heisig_en: string;
	unicode: string;
	freq_mainichi_shinbun: number;
}

const RandomKanjiPage = () => {
	const [kanjiOfDay, setKanjiOfDay] = useState('' as string);
	const [kanjiInfo, setKanjiInfo] = useState({} as KanjiInfo);
	const [joyouDict, setJoyouDict] = useState(new Map<string, string>());
	const [kanjiSession, setKanjiSession] = useState(new Array<string>)
	

	const randomKanji = () =>  {
		const kanjiStart = 0x3400;
		const kanjiEnd = 0xFA6A;
		const randomKanjiCodePoint = Math.floor(Math.random() * (kanjiEnd - kanjiStart + 1)) + kanjiStart;
		const randKanji = String.fromCodePoint(randomKanjiCodePoint);
		// const currKSesh: Array<string> = kanjiSession;
		// currKSesh.push(randKanji)
		// setKanjiSession(currKSesh);
		return randKanji;
	}

	const isInJoyouDict = (kanji: string) => {		
		console.log(joyouDict)
		if (map.has(kanji)) {
			return true;
		} else {
			return false;
		}
	}

	function checkJoyou(kanji: string): boolean {
	// reference : https://github.com/KEINOS/go-joyokanjis/blob/main/kanjis/internal/converter.go	
	let validKanji = true;
		if(isInJoyouDict(kanji)) {
			validKanji = true;
		} else {
			validKanji = false;
		}
		return validKanji;
	}

	const handleGenerateNewKanji = () => {
		let validKanji = false;
		while (validKanji === false) {
			let newKanji = randomKanji();
			if(checkJoyou(newKanji))
				validKanji = true;
			else {
				newKanji = randomKanji();	
			}
		newKanji = randomKanji();
		}
		setKanjiOfDay(randomKanji);
	}

	useEffect(() => {
		const initJoyouDict = () => {
			const data = require('../JMDict/joyo2010.json');;
			localStorage.setItem('joyouDict', JSON.stringify(data));
		}
		initJoyouDict();
		setJoyouDict(JSON.parse(localStorage.getItem('joyouDict') || '{}'));
	}, []);

	useEffect(() => {
		const getKanjjiInfo = async () => {
			const res = await fetch(`https://kanjiapi.dev/v1/kanji/${kanjiOfDay}`);
			const data = await res.json();
			const newKanjiInfoObj: KanjiInfo = data as KanjiInfo;
			setKanjiInfo(newKanjiInfoObj);
			console.log(newKanjiInfoObj);
		}
		getKanjjiInfo();
	}, [kanjiOfDay]);

	return (
	<>
		<div className="p-2 text-3xl">
		Kanji Randomizer
		</div>
		<div className="container py-10 mx-auto grid flex-col justify-center">
			<div className="flex items-center justify-center align-middle box-sizing h-96 w-96 bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl">
				<div>
					{kanjiOfDay ? <div className="text-9xl">{kanjiOfDay}</div> : <div className="text-xl">Click Generate to start learning!</div>}
				</div>
			</div>
			
			<div className="py-4 flex justify-center">
				{ kanjiInfo?.meanings && kanjiInfo?.meanings.length > 0 ? <div className="text-l">Definitions: {kanjiInfo['meanings']}</div> : null}
				{ kanjiInfo?.['grade'] ? <div className="text-l">Grade: {kanjiInfo['grade']}</div> : null}
				{ kanjiInfo?.on_readings && kanjiInfo?.on_readings.length > 0 ? <div className="text-l">on-yomi: {kanjiInfo.on_readings}</div> : null}
				{ kanjiInfo?.kun_readings && kanjiInfo?.kun_readings.length > 0 ? <div className="text-l">kun-yomi:: {kanjiInfo.kun_readings}</div> : null}
				{ kanjiInfo?.stroke_count ? <div className="text-l">Stroke Count: {kanjiInfo.stroke_count}</div> : null}

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