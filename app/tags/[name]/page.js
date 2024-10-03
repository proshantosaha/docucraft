import ContentDisplay from "@/components/ContentDisplay";
import { getDocuments } from "@/lib/doc";
import { getDocumentByTag } from "@/utils/doc-util";
import React from "react";

const TagPage = ({ params: { name } }) => {
  const docs = getDocuments();
  const matchedDocuments = getDocumentByTag(docs, name);
  return <ContentDisplay id={matchedDocuments[0].id} />;
};

export default TagPage;
