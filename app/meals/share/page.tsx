import Link from "next/link";

const SharePage = () => {
  // Logic for sharing functionality goes here

  return (
    <div>
      <h1>Share Page</h1>
      {/* Share content goes here */}
      <p>
        <Link href={"."}>Back</Link>
      </p>
    </div>
  );
};

export default SharePage;
