import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  const [change, setchange] = useState(0)

  const add = () => {
    setchange(a => a + 1)
  }

  const sub = () => {
    setchange(a => a - 1)
  }
  return (
    <>
      <Head>
        <title>demo app</title>
      </Head>
      <div className='container display-flex align-center justify-center flex-dir-y g-5'>
        welcome to the App service
        <button className='btn success-bg' onClick={add}>add</button>
        <span className={change > 0 ? "success" : change < 0 ? "danger" : ""}>{change}</span>
        <button className='btn danger-bg' onClick={sub}>sub</button>
      </div>
    </>
  )
}
