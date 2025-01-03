import { Post } from "@/app/type"; 
import { client } from "@/sanity/lib/client"; 
import BlogCard from "./Components/BlogCard";
import imageUrlBuilder from '@sanity/image-url'; 
import { SanityImageSource } from '@sanity/image-url/lib/types/types'; 


const builder = imageUrlBuilder(client);


function urlFor(source: SanityImageSource) {
  return builder.image(source).url();
}


export default async function Home() {
  const query = `*[_type == 'post'] | order(_createdAt desc) {
    _id,
    summary,
    title,
    image,
    "slug": slug.current
  }`;

  
  const posts: Post[] = await client.fetch(query);

  return (
    <main className="flex min-h-screen flex-col">
      <h1 className="text-2xl font-bold">Technology & Web Development</h1>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <BlogCard
            key={post._id}
            title={post.title}
            summary={post.summary}
            image={urlFor(post.image) ?? ""}  
            slug={post.slug}
          />
        ))}
      </section>
    </main>
  );
}
