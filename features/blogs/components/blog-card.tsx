import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BlogShort } from "@/features/blogs/interfaces/blog-short.interface";
import ButtonLink from "@/shared/components/button-link";
import clsx from "clsx";
import Image from "next/image";

interface Props {
  cls?: string;
  blog: BlogShort;
}

export function BlogCard({ cls, blog }: Props) {
  return (
    <Card className={clsx("w-full overflow-hidden", cls)}>
      <Image
        className="w-full aspect-[3/2] object-cover"
        width={300}
        height={300}
        alt=""
        src="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp"
      />
      <div className="flex flex-col justify-between">
        <CardHeader>
          <CardTitle>Create project</CardTitle>
          <CardDescription>
            Deploy your new project in one-click.
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex justify-end">
          <ButtonLink text="Xem chi tiết" url="/blogs" />
        </CardFooter>
      </div>
    </Card>
  );
}
