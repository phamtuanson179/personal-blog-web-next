import { Badge } from "@/components/ui/badge";

interface Props {
  tags: string;
}
export default function BlogTags({ tags }: Props) {
  const tagArr = [
    ...tags.split(","),
    ...tags.split(","),
    ...tags.split(","),
    ...tags.split(","),
    ...tags.split(","),
    ...tags.split(","),
    ...tags.split(","),
    ...tags.split(","),
  ];
  return (
    <div className="flex gap-2 flex-wrap">
      {tagArr.map((tag: string, idx: number) => (
        <Badge key={idx}>{tag}</Badge>
      ))}
    </div>
  );
}
