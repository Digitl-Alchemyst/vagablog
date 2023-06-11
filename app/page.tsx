import Trending from '@/components/homeWidgets/Trending'
import TripBlog from '@/components/homeWidgets/TripBlog'
import TravelNews from '@/components/homeWidgets/TravelNews'
import WanderingThoughts from '@/components/homeWidgets/WanderingThoughts'
import Subscribe from '@/components/global/Subscribe'
import Sidebar from '@/components/global/Sidebar'
import { prisma } from '@/app/api/client'
import { Post } from '@prisma/client'


export const revalidate = 3600; // does this actually work?

const getPosts = async () => {
  const posts = await prisma.post.findMany();

  const formattedPosts = await Promise.all(
    posts.map(async (post: Post) => {
      const imageModule = require(`../public${post.image}`);
      return {
        ...post,
        image: imageModule.default,
      };
    })
  );

  return formattedPosts;
};

export default async function Home() {
  const posts = await getPosts();
  // console.log("🚀 ~ file: page.tsx:18 ~ Home ~ posts:", posts)

  const formatPosts = () => {
    const trendingPost: Array<Post> = [];
    const tripBlogPost: Array<Post> = [];
    const travelNewsPost: Array<Post> = [];
    const wanderingThoughtsPost: Array<Post> = [];
    
    posts.forEach((post: Post, i: number) => {
      if (i < 6) {
        trendingPost.push(post);
      }
      if (post?.category === 'Trip Blog') {
        tripBlogPost.push(post);
      } else 
      if (post?.category === 'Travel News') {
        travelNewsPost.push(post);
      } else
      if (post?.category === 'Wandering Thoughts') {
        wanderingThoughtsPost.push(post);
      }
    });
    
    return [trendingPost, tripBlogPost, travelNewsPost, wanderingThoughtsPost];
  };

  const [trendingPost, tripBlogPost, travelNewsPost, wanderingThoughtsPost] = formatPosts();





  return (
    <main className="px-10 leading-7">


      <Trending trendingPost={trendingPost} />


      <div className="md:flex gap-10 mb-5">

        <div className="basis-3/4">

          <TripBlog tripBlogPosts={tripBlogPost} />
          <TravelNews travelNewsPosts={travelNewsPost} />
          <WanderingThoughts wanderingThoughtsPosts={wanderingThoughtsPost} />

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
