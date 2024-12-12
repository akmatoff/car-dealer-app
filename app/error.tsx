"use client";

export default function ErrorPage({ error }: { error: Error }) {
  return (
    <div className="flex flex-col gap-4 w-screen mid-content text-center">
      <h1 className="text-4xl font-bold">Oops... Something went wrong</h1>

      <p>{error.message}</p>
    </div>
  );
}
