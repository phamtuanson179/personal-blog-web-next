import { BlogCard } from "@/features/blogs/components/blog-card";
import { BlogShort } from "@/features/blogs/interfaces/blog-short.interface";

interface Props {
  blogs?: BlogShort[];
}
export function BlogCardsLatest({ blogs }: Props) {
  return (
    <section className="flex justify-center gap-4 py-12">
      {blogs?.map((blog) => (
        <BlogCard cls="flex" blog={blog}></BlogCard>
      ))}
    </section>
  );
}
