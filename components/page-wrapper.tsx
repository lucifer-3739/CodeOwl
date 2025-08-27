import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { SidebarTrigger } from "./ui/sidebar";
import { Logout } from "./logout";
import { ModeToggle } from "./mode-toggle";
import { Fragment } from "react";

interface PageWrapperProps {
  children: React.ReactNode;
  breadcrumbs: {
    label: string;
    href: string;
  }[];
}

export function PageWrapper({ children, breadcrumbs }: PageWrapperProps) {
  return (
    <div className="flex flex-col gap-4 min-h-screen">
      <header className="flex flex-col sm:flex-row items-start sm:items-center p-2 sm:p-4 border-b bg-background">
        <div className="flex flex-col sm:flex-row w-full justify-between gap-3 sm:gap-0">
          <div className="flex flex-row flex-wrap items-center gap-2 sm:gap-4">
            <SidebarTrigger />
            <Breadcrumb>
              <BreadcrumbList>
                {breadcrumbs.map((breadcrumb, index) => (
                  <Fragment key={breadcrumb.label}>
                    <BreadcrumbItem>
                      <BreadcrumbLink href={breadcrumb.href}>
                        {breadcrumb.label}
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    {index !== breadcrumbs.length - 1 && (
                      <BreadcrumbSeparator />
                    )}
                  </Fragment>
                ))}
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="flex flex-row items-center gap-2 sm:gap-4 mt-2 sm:mt-0">
            <ModeToggle />
            <Logout />
          </div>
        </div>
      </header>
      <div className="flex flex-1 flex-col gap-4 px-2 sm:px-4 md:px-6 lg:px-8 pt-0 min-h-0">
        {children}
      </div>
    </div>
  );
}