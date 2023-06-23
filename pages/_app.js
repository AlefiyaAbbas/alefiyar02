import '@/styles/globals.css'
import localFont from 'next/font/local'

const cabinet = localFont({
	src: "../public/fonts/Cabinet/CabinetGrotesk-Variable.woff2",
	variable: "--font-cabinet",
})

const britney = localFont({
	src: "../public/fonts/Britney/Britney-Variable.woff2",
	variable: "--font-britney",
})

export default function App({ Component, pageProps }) {
	return (
		<main className={`${britney.variable} ${cabinet.variable}`}>
			<Component {...pageProps} />
		</main>
	)
}
