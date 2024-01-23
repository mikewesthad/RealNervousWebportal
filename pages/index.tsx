import type { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <titl>Developer Con</titl>
        <meta
          name="description"
          content="Join us at Developer Con. Connect, learn, and explore the future of coding!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Developer Con 2024</h1>

        <p className={styles.description}>
          Join us at Developer Con. Connect, learn, and explore the future of
          coding!
        </p>

        <div className={styles.eventDetails}>
          <p>
            <strong>Date:</strong> June 30, 2024
          </p>
          <p>
            <strong>Location:</strong> Moscone Center, San Francisco, CA
          </p>
          <p>
            <strong>Agenda:</strong>
          </p>
          <ul>
            <li>Keynote Presentations</li>
            <li>Workshops and Breakout Sessions</li>
            <li>Networking Events</li>
            <li>Live Coding Challenges</li>
          </ul>
        </div>

        <footer className={styles.footer}>
          <a href="/__repl" target="_blank" rel="noopener noreferrer">
            Built on
            <span className={styles.logo}>
              <Image
                src="/replit.svg"
                alt="Replit Logo"
                width={20}
                height={18}
              />
            </span>
            Replit
          </a>
        </footer>
      </main>
    </div>
  );
};

export default Home;
