import "@/styles/globals.css";

import { Francois_One } from 'next/font/google'

const francoisOne = Francois_One({
  subsets: ['latin'],
  weight: ['400'], 
  variable: '--font-francois',
})

export default function App({ Component, pageProps }) {
  return (
    <div className={francoisOne.variable}>
      <Component {...pageProps} />
    </div>
  )
}
