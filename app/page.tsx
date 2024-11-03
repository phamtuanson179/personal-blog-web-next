import { BlogCards } from "@/features/blogs/components/blog-cards";
import { BlogCardsLatest } from "@/features/blogs/components/blog-cards-latest";

export default async function Home() {
  const latestBlogs = await fetch("http://10.10.10.11:3000/blogs")
    .then((res) => res.json())
    .then((res) => res.filter((_: unknown, idx: number) => idx < 2));

  const allBlogs = await fetch("http://10.10.10.11:3000/blogs").then((res) =>
    res.json()
  );
  console.log({ latestBlogs });

  return (
    <>
      <section className='max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl m-auto p-4 md:p-8"'>
        <BlogCardsLatest blogs={latestBlogs} />
        <BlogCards blogs={allBlogs} />
      </section>
    </>
  );
}
