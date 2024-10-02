import ContentDisplay from "@/components/ContentDisplay";
import React from "react";

const ContentId = ({ params: { contentId } }) => {
  return <ContentDisplay id={contentId} />;
};

export default ContentId;
