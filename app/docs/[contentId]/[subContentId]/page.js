import ContentDisplay from "@/components/ContentDisplay";
import React from "react";

const SubContentId = ({ params: { subContentId } }) => {
  return <ContentDisplay id={subContentId} />;
};

export default SubContentId;
