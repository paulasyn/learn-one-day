"use client";
import { useState, useEffect } from 'react';

const JoyouInit = () => {
	const [joyouDict, setJoyouDict] = useState({} as Map<string, string>);

	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch('../JMDict/joyo2010.json');
			const data = await res.json();
			
			localStorage.setItem('joyouDict', JSON.stringify(data));
			setJoyouDict(data);
		};
		fetchData();
	}, [joyouDict]);
}
export default JoyouInit;