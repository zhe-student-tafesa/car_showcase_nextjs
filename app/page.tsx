import { Hero } from '@/components'
import Image from 'next/image'



export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      {/* padding-x: defined in globals.css. when sm, px-16; other: px-6 */}
      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>
            Car Catalogue
          </h1>
        </div>
      </div>
    </main>
  )
}
