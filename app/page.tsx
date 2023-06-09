import Trending from '@/components/Trending'
import TripBlog from '@/components/TripBlog'
import TravelNews from '@/components/TravelNews'
import WanderingThoughts from '@/components/WanderingThoughts'
import Subscribe from '@/components/Subscribe'
import Sidebar from '@/components/Sidebar'


export default function Home() {
  return (
    <main className="px-10 leading-7">

      <Trending />

        <div className="md:flex gap-10 mb-5">
          <div className="basis-3/4">
            <TripBlog />Tech
            <TravelNews />Travel
            <WanderingThoughts />Other Trending
            <div className="hidden md:block">
              <Subscribe />
            </div>

          </div>
        </div>
        <div className="basis-1/4">
          <Sidebar />
        </div>

    </main>
  )
}
