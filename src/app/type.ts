import { Key } from "react";

export type Image = {
  url: string;
  asset: {
    _ref: string;
    _type: string;
  };
  alt?: string;
};

export type Post = {
  _id: Key | null | undefined; 
  title: string;
  summary: string;
  image: Image;
  slug: string;
};
