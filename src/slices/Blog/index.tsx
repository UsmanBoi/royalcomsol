import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Blog`.
 */
export type BlogProps = SliceComponentProps<Content.BlogSlice>;

/**
 * Component for "Blog" Slices.
 */
const Blog: FC<BlogProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {slice.primary.blog_data.map((blog, index) => (
        <div key={index}>
          <h1>{blog.blog_title}</h1>
          <span>{blog.blog_description}</span>
        </div>
      ))}
    </section>
  );
};

export default Blog;
