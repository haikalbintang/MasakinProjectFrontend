interface TextBlackProps {
  text: string;
}

export default function TextBlack({ text }: TextBlackProps) {
  return <p className="w-1/3 text-center text-sm font-semibold">{text}</p>;
}
