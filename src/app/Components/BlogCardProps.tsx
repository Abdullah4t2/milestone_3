import Link from "next/link";
import Image from "next/image";

type BlogCardProps = {
  title: string;
  summary: string;
  image: {
    asset: {
      _ref: string;
      _type: string;
    };
    alt?: string;
  };
  slug: string;
};

export default function BlogCard({ title, summary, image, slug }: BlogCardProps) {
  
  const imageUrl = `https://cdn.sanity.io/images/<projectId>/<dataset>/${image.asset._ref.replace(
    "image-",
    ""
  )}.jpg`;

  return (
    <div className="p-4 border rounded-md shadow-md">
      {image && (
        <div className="relative w-full h-48">
          <Image
            src={imageUrl}
            alt={image.alt || "Blog Image"}
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
