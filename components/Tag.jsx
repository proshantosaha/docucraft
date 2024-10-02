import Link from "next/link";
import React from "react";

export const Tag = ({ tag }) => {
  return (
    <Link
      className="bg-gray-200 p-1 rounded-md mr-2 text-xs"
      key={tag}
      href={`/tag/${tag}`}
    >
      {tag}
    </Link>
  );
};
