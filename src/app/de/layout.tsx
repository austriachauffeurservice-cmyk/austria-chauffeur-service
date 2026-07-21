import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileActionBar } from "@/components/mobile-action-bar";
import { SetHtmlLang } from "@/components/set-html-lang";

export default function GermanSiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-full flex-1 flex-col">
      <SetHtmlLang lang="de" />
      <SiteHeader locale="de" />
      <main className="flex-1 pb-14 md:pb-0">{children}</main>
      <SiteFooter locale="de" />
      <MobileActionBar locale="de" />
    </div>
  );
}
