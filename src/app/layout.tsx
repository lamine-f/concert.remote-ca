import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import styles from "./layout.module.css";
import NavBar, {BurgerMenu} from "@/app/_components/nav-bar/nav-bar.component";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Concert ",
  description: "Les concerts de vos rappeurs préférés",
};



function Header () {
  return (
    <header className={styles.headerWrapper} >
      <div className={styles.headerContainer} >
        <NavBar/>
      </div>
    </header>
  )
}
function Main ({children}:{ children: React.ReactNode }){
  return (
    <main className={styles.mainWrapper}>
      <div className={styles.mainContainer}>
        {children}
      </div>
    </main>
  )
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <div className={styles.bodyWrapper} >
          <div className={styles.bodyContainer} >
            <Header/>
            <Main
              children={children}
            />
          </div>
        </div>
      </body>
    </html>
  );
}

