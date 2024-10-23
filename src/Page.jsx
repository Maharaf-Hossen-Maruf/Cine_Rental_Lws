import Header from "./components/Header";
import MovieList from "./components/MovieList";
import SideBar from "./components/SideBar";
import Footer from './components/Footer'
import {useContext} from 'react'
import { ThemeContext } from "./context";

export default function Page() {
    const {darkMode} = useContext(ThemeContext)
  return (
    <div className={`w-full h-full ${darkMode ? 'dark' : ""}`} >
      <Header />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <SideBar />
          <MovieList />
        </div>
      </main>
      <Footer />
    </div>
  );
}