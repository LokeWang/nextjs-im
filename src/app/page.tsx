import Image from "next/image";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/images/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />

        <div>
           <p className="text-red-500 text-2xl">测试测试赛东方红</p>
           <Image
          src="/images/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
        />
        </div>
      </main>
    </div>
  );
}
