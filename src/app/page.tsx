"use client";

import Image from "next/image";
import { Button, DatePicker, Space } from "antd";
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
          <Space orientation="vertical" size="middle">
            <Space wrap>
              <Button type="primary">AntD Primary</Button>
              <Button>AntD Default</Button>
              <Button type="dashed">AntD Dashed</Button>
            </Space>
            <DatePicker />
          </Space>
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
