import { ReactNode } from "react";
import { SiteFooter } from "@/components/marketing/site-footer";
import { SiteHeader } from "@/components/marketing/site-header";

export function PublicShell({ children }: { children: ReactNode }) {
  return (
    <div className="px-4 py-4 md:px-6">
      <div className="mx-auto max-w-[1600px] space-y-4">
        <SiteHeader />
        <main id="main-content" tabIndex={-1} className="focus:outline-none">
          {children}
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
