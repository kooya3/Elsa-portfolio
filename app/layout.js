import "./globals.css";
import Header from "@/app/Header/page";
import Theming from "@/theme/Theming";

export const metadata = {
  title: "Elsa Portfolio",
  description: "Personal portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <Theming>
          <Header />
          {children}
        </Theming>
      </body>
    </html>
  );
}
