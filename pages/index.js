import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Project from '@/components/Project'

export default function Home() {
	return (
		<main>
			<Navbar />
			<Hero />
			<About />
			<Skills />
			<Project />
		</main>
	)
}