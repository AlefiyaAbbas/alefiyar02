import '@/styles/globals.css'
import localFont from 'next/font/local'


const cabinet = localFont({ src: "../public/fonts/Cabinet/CabinetGrotesk-Light.woff2" })

export default function App({ Component, pageProps }) {
  return (
    <main className={` ${cabinet.className}`}>
      <Component {...pageProps} />
    </main>


  )
}
