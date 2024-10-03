import ContentDisplay from "@/components/ContentDisplay";
import { getDocuments } from "@/lib/doc";
import { getDocumentByAuthor } from "@/utils/doc-util";

const AuthorPage = ({ params: { name } }) => {
  const docs = getDocuments();
  const matchedDocuments = getDocumentByAuthor(docs, name);

  return <ContentDisplay id={matchedDocuments[0].id} />;
};
export default AuthorPage;
