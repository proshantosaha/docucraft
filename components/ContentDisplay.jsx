import { getDocumentContent } from "@/lib/doc";
import Link from "next/link";
import React from "react";

const ContentDisplay = async ({ id }) => {
  const documentContent = await getDocumentContent(id);
  return (
    <article class="prose dark:prose-invert">
      <h1>{documentContent.title}</h1>
      <div>
        <span>Published on:{documentContent.date}</span> by {""}
        <Link href={`/author/${documentContent.author}`}>
          {documentContent.author}
        </Link>
        under the
        <Link href={`/categories/${documentContent.category}`}>
          {documentContent.category}
        </Link>
        category.
      </div>
    </article>
  );
};

export default ContentDisplay;
