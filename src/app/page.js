import Image from "next/image";
import styles from "./page.module.css";
import Banner from "@/component/Banner";
import About from "@/component/About";
import Services from "@/component/Services";

export default function Home() {
  return (
    <>
    <Banner/>
    <About/>
    <Services/>
    </>
  );
}
