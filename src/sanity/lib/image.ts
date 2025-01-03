import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types'; // Import SanityImageSource type

const config = {
  dataset: 'your_dataset', // Replace with your dataset name
  projectId: '1wxnibkn', // Replace with your Sanity project ID
  apiVersion: '2023-01-01', // Use current API version
  useCdn: true,
};

const sanityClient = createClient(config);
const builder = imageUrlBuilder(sanityClient);

// Updated `urlFor` function to use the correct type
export const urlFor = (source: SanityImageSource) => builder.image(source).url();

export { sanityClient };
