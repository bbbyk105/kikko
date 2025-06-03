import React from "react";

interface StructuredDataProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any | any[];
  id?: string;
}

export function StructuredDataScript({ data, id }: StructuredDataProps) {
  const jsonLd = Array.isArray(data) ? data : [data];

  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
}
