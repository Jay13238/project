import type { SanityDocument } from "@sanity/client";
import Link from "next/link";

const Posts = ({posts = []}:{posts: SanityDocument[]}) => {
    const numberOfPosts = posts.length === 1 ? `1 post` : `${posts.length}`;
  return (
    <div>
        <p>{numberOfPosts}</p>
        {posts.map((post) =>
            <Link
            key={post._id}
            href={post.slug.current}
            >
            <h2>{post.title}</h2>
            </Link>
        )}
    </div>
  )
}

export default Posts
