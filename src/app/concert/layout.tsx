import styles from "./layout.module.css";
import NavBar from "@/app/concert/_components/nav-bar/nav-bar.component";
import SearchBar from "@/app/concert/_components/search-bar/search-bar.component";

function Header () {
  return (
    <header className={styles.headerWrapper} >
      <div className={styles.headerContainer} >
        <SearchBar/>
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

export default function ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <div className={styles.bodyWrapper} >
          <div className={styles.bodyContainer} >
            <Header/>
            <Main

              children={children}
            />
          </div>
        </div>
  );
}

