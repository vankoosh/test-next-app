import Image from "next/image";

export default function Front() {
  return (
    <div className="relative w-full h-screen">
      <Image
        src="/imgs/barn-door-hero.webp"
        alt="hero image"
        fill
        quality="100"
      />
    </div>
  );
}
