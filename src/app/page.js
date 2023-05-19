'use client'
import Image from 'next/image'
import styles from './page.module.css'
import { useEffect, useState } from 'react'
import filterContext from '../app/context/filterContext'
import  data  from '../app/data/data.json'
import FilterBar from './components/filterBar/FilterBar'
import Card from './components/Card/Card'


export default function Home() {

  const [jobs, setJobs] = useState([])

  useEffect(() => {
    setJobs(data)
  }, [])

  return (
    <filterContext.Provider value={{ jobs, setJobs }}>
    <main className={styles.main}>
      <div>
        <FilterBar />
        <Card data={data} />
      </div>
    </main>
    </filterContext.Provider>
  )
}
