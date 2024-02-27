interface Props {
  params: { id: string };
}

export default function BlogPost({ params }: Props) {
  return (
    <main>
      <h1>Post #{params.id}</h1>
      <p>🔥 This is the first post! 🔥</p>
    </main>
  );
}
