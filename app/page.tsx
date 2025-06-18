
import Header from "@/components/Header";
import styles from "./page.module.css";
import Main from "@/components/Main";

export default function Home() {
  return (
    <>
      <Header onRoad={14} completed={3} onHold={2} />
      <Main />
    </>
  );
}
