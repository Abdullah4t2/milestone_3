import { Post } from "@/app/type"; 
import Link from "next/link";
import Image from "next/image"; 


type BlogCardProps = Pick<Post, "title" | "summary" | "slug"> & {
  image: string; 
};

export default function BlogCard({ title, summary, image, slug }: BlogCardProps) {
  return (
    <div className="p-4 border rounded-md shadow-md">
      {image && (
        <div className="relative w-full h-48">
          <Image
            src={image}
            alt={title || "Blog Image"}
            layout="fill"
            objectFit="cover"
            className="rounded-md"
            priority 
          />
        </div>
      )}
      <h2 className="text-xl font-bold mt-4">{title}</h2>
      <p className="text-gray-600 mt-2">{summary}</p>
      <Link href={`/blog/${slug}`} className="text-blue-500 mt-4 block">
        Read More
      </Link>
    </div>
  );
}