"use client";

import { Button } from "@/components/ui/button";
import { redirect, useRouter } from "next/navigation";

interface Props {
  readonly text?: string;
  readonly url: string;
  readonly [propName: string]: any;
}

export default function ButtonLink({ text, url, ...rest }: Props) {
  const router = useRouter();
  return (
    <Button
      onClick={() => {
        router.push(url);
      }}
      {...rest}
    >
      {text}
    </Button>
  );
}
