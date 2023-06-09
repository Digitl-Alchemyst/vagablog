import Trending from '@/components/homeWidgets/Trending'
import TripBlog from '@/components/homeWidgets/TripBlog'
import TravelNews from '@/components/homeWidgets/TravelNews'
import WanderingThoughts from '@/components/homeWidgets/WanderingThoughts'
import Subscribe from '@/components/global/Subscribe'
import Sidebar from '@/components/global/Sidebar'


export default function Home() {
  return (
    <main className="px-10 leading-7">

      <Trending />

      <div className="md:flex gap-10 mb-5">

        <div className="basis-3/4">
          <TripBlog />
          <TravelNews />
          <WanderingThoughts />
          <div className="hidden md:block">
            <Subscribe />
          </div>
        </div>
        
        <div className="basis-1/4">
          <Sidebar />
        </div>

      </div>

    </main>
  )
}
