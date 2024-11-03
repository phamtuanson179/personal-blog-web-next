import { BlogCard } from "@/features/blogs/components/blog-card";
import { BlogShort } from "@/features/blogs/interfaces/blog-short.interface";

interface Props {
  blogs?: BlogShort[];
}

export function BlogCards({ blogs }: Props) {
  return (
    <section className="grid grid-cols-3 gap-4 py-12">
      {blogs?.map((blog) => (
        <BlogCard cls="flex" blog={blog}></BlogCard>
      ))}
    </section>
  );
}
