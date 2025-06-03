import React from "react";

interface MicroDataWrapperProps {
  children: React.ReactNode;
  itemScope?: boolean;
  itemType?: string;
  itemProp?: string;
}

export function MicroDataWrapper({
  children,
  itemScope = false,
  itemType,
  itemProp,
}: MicroDataWrapperProps) {
  return (
    <div
      {...(itemScope && { itemScope: true })}
      {...(itemType && { itemType })}
      {...(itemProp && { itemProp })}
    >
      {children}
    </div>
  );
}
