import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Project from '@/components/Project'
import Socials from '@/components/Socials'
import Certificate from '@/components/Certificate'
import Cursor from '@/components/Cursor'

export default function Home() {
	return (
		<main>
			{/* <Cursor /> */}
			<Navbar />
			<Socials />
			<Hero />
			<About />
			<Skills />
			<Project />
			<Certificate />
		</main>
	)
}