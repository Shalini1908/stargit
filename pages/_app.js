import '../styles/globals.css'
import  Counter from "./counter"

export default function App({ Component, pageProps }) {

  return 
  (
    <>
        <Counter />
    <Component {...pageProps} /></>

  )

}
