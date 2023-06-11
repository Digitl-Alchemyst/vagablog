import React from 'react'
// import Content from '@/components/post/Content'
import Sidebar from '@/components/global/Sidebar'
import { prisma } from '@/app/api/client';
import { Post as PostType } from '@prisma/client';
import { FormattedPost } from '@/app/types';

type Props = {
    params: { id: string };
  };
  
  export const revalidate = 60;
  
  const getPost = async (id: string) => {
    const post: PostType | null = await prisma.post.findUnique({
      where: { id },
    });
  
    if (!post) {
      console.log(`Post with id ${id} not found`);
      return null;
    }
  
    const formattedPost = {
      ...post,
      createdAt: post?.createdAt?.toISOString(),
      updatedAt: post?.updatedAt?.toISOString(),
    };
  
    return formattedPost;
  };

const Post = async ({ params }: Props) => {
  const { id } = params;
  const post: FormattedPost | null = await getPost(id);
    console.log("🚀 ~ file: page.tsx:35 ~ Post ~ post:", post)

    return (
      <main className="px-10 leading-7">

        <div className="md:flex gap-10 mb-5">
          <div className="basis-3/4">
              {/* <Content /> */}
          </div>        
          <div className="basis-1/4">
              <Sidebar />
          </div>
        </div>

      </main>
    );
};

export default Post;