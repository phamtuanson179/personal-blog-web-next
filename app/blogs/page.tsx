import BlogCardDetail from "@/features/blogs/components/blog-card-detail";

export default async function BlogDetail() {
  const blogDetail = await fetch("http://10.10.10.11:3000/blogs/1").then(
    (res) => res.json()
  );

  console.log({ blogDetail });

  return (
    <section className='max-w-xl md:max-w-3xl m-auto p-4 md:p-8"'>
      <BlogCardDetail blogDetail={blogDetail} />
    </section>
  );
}
