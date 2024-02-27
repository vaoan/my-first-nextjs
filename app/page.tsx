import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>
        Time to get started!
        <p>
          <Link href={"community"}>Community</Link>
        </p>
        <p>
          <Link href={"meals"}>Meals</Link>
        </p>
      </h1>
    </main>
  );
}
