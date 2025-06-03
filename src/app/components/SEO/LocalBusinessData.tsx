import { StructuredDataScript } from "../StructuredData";
import {
  generateLocalBusinessData,
  generateFAQData,
  generateWebSiteData,
  KIKKOU_BUSINESS_INFO,
  KIKKOU_FAQ,
} from "../../lib/structured-data";

interface LocalBusinessDataProps {
  includeWebsite?: boolean;
  includeFAQ?: boolean;
  additionalData?: unknown[];
}

export function LocalBusinessData({
  includeWebsite = true,
  includeFAQ = true,
  additionalData = [],
}: LocalBusinessDataProps) {
  const structuredDataArray = [
    generateLocalBusinessData(KIKKOU_BUSINESS_INFO),
    ...(includeWebsite ? [generateWebSiteData(KIKKOU_BUSINESS_INFO)] : []),
    ...(includeFAQ ? [generateFAQData(KIKKOU_FAQ)] : []),
    ...additionalData,
  ];

  return <StructuredDataScript data={structuredDataArray} id="business-data" />;
}
