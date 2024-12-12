interface Props {
  text: string;
}

export default function Banner({ text }: Props) {
  return (
    <div className="px-6 py-20 rounded-xl bg-banner-image bg-center bg-cover">
      <h1 className="text-3xl font-bold text-center text-primary-foreground">
        {text}
      </h1>
    </div>
  );
}
