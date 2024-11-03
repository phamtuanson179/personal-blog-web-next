import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import BlogTags from "@/features/blogs/components/blog-tags";
import { BlogDetail } from "@/features/blogs/interfaces/blog-detail.interface";
import Image from "next/image";

interface Props {
  blogDetail: BlogDetail;
}

export default function BlogCardDetail({ blogDetail }: Props) {
  return (
    <Card className="overflow-hidden">
      <Image
        priority
        className="w-full object-cover max-h-96"
        width={300}
        height={300}
        alt="thumbnail"
        src="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp"
      />
      <CardHeader className="bg-white rounded-sm">
        <CardTitle>{blogDetail?.title}</CardTitle>
        <CardDescription>{blogDetail?.summary}</CardDescription>
      </CardHeader>
      <CardContent>
          <div className="mb-4">{blogDetail?.content}</div>
          <BlogTags tags={blogDetail.tags} />
      </CardContent>
    </Card>
  );
}
