import Link from "next/link";

export default function MealPage() {
  return (
    <div>
      <h1>Meal Page</h1>
      {/* Meal content goes here */}
      <p>
        <Link href={"."}>Back</Link>
      </p>
    </div>
  );
}
