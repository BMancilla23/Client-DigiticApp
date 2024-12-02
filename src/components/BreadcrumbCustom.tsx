import { Fragment } from "react";
import { RxSlash } from "react-icons/rx";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";

interface BreadcrumbCustomProps {
  items: {
    label: string;
    href: string;
  }[];
}

export const BreadcrumbCustom = ({ items }: BreadcrumbCustomProps) => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {items.map((item, index) => (
          <Fragment key={index}>
            <BreadcrumbItem>
              <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
            </BreadcrumbItem>
            {index !== items.length - 1 && (
              <BreadcrumbSeparator>
                <RxSlash />
              </BreadcrumbSeparator>
            )}
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
