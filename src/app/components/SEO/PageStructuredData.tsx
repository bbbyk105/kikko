import { StructuredDataScript } from "../StructuredData";
import {
  generateWebPageData,
  generateBreadcrumbData,
} from "../../lib/structured-data";

// 構造化データの型を定義
type StructuredDataItem =
  | ReturnType<typeof generateWebPageData>
  | ReturnType<typeof generateBreadcrumbData>;

interface PageStructuredDataProps {
  pageType: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage";
  title: string;
  description: string;
  url: string;
  breadcrumbItems?: Array<{ name: string; url: string }>;
}

export function PageStructuredData({
  pageType,
  title,
  description,
  url,
  breadcrumbItems = [],
}: PageStructuredDataProps) {
  const pageData = generateWebPageData(
    pageType,
    title,
    description,
    url,
    breadcrumbItems
  );

  const structuredDataArray: StructuredDataItem[] = [pageData];

  if (breadcrumbItems.length > 0) {
    structuredDataArray.push(generateBreadcrumbData(breadcrumbItems));
  }

  return <StructuredDataScript data={structuredDataArray} id="page-data" />;
}
