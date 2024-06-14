import type { Metadata, Viewport } from "next";
import "./global.css";
import "./embla.css";
import { Header, Footer, Divider } from "@/components";

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME + " | Gốm Nhật cân ký",
  description:
    "Ngõ Gốm - Không gian gốm Nhật tinh tế, mang đến trải nghiệm" +
    " chữa lành qua từng sản phẩm. Đến ngay Ngõ Gốm!",
  icons: [
    {
      sizes: "32x32",
      url: "/fav/favicon-32x32.png",
      rel: "icon",
    },
    {
      sizes: "16x16",
      url: "/fav/favicon-16x16.png",
      rel: "icon",
    },
    {
      rel: "apple-touch-icon",
      url: "/fav/apple-touch-icon.png",
      sizes: "180x180",
    },
    {
      rel: "mask-icon",
      url: "/fav/safari-pinned-tab.svg",
      color: "#f2ae72",
    },
  ],
  keywords: "Ngõ, Ngõ Gốm, Gốm Nhật cân ký, Gốm Nhật, chữa lành, mua gốm Nhật",
  manifest: "/fav/site.webmanifest",
  verification: {
    google: "otBSKQfX3r1A8qIr_XaYGYk57qXZfwese7X1lxYnyco",
  },
};
export const viewport: Viewport = {
  themeColor: "#f2ae72",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`antialiased`}>
        <main className="flex flex-col min-h-[100vh]">
          <Header />
          <div className="content-wrapper">{children}</div>
          <Footer className="mt-auto" />
        </main>
      </body>
    </html>
  );
}
