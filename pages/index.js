import Image from 'next/image'
import Navbar from '@/components/Navbar'
import localFont from 'next/font/local'
import Hero  from '@/components/Hero'

export default function Home() {
	return (
		<main>
			<Hero />
			{/* <Navbar /> */}
		</main>
	)
}