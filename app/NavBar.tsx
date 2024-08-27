import React from 'react'
import Link from 'next/link'

const NavBar = () => {
  return (
	<div className='flex bg-slate-200 p-5'>
		<Link href='/' className='mr-5'>Home</Link>
		<Link href='/random' className='mr-5'>Kanji Randomizer</Link>
		<Link href='/dictionary' className='mr-5'>Dictionary</Link>
	</div>

	// <div>
	// 	<ul className="flex bg-slate-200 p-5 justify-left">
	// 		<li className="flex-1 mr-2">
	// 			<Link className="text-center block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white" href="/">
	// 			Home
	// 			</Link>
	// 		</li>
	// 		<li className="flex-1 mr-2">
	// 			<Link className="text-center block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white" href="/oneday">
	// 				One Day
	// 			</Link>
	// 		</li>
	// 		<li className="flex-1 mr-2">
	// 			<Link className="text-center block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white" href="/dictionary">
	// 				Dictionary
	// 			</Link>
	// 		</li>
	// 	</ul>
	// </div>
  )
}

export default NavBar