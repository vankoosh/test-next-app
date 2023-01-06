import Image from "next/image";

export default function Front() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <Image
        src="/imgs/barn-door-hero.webp"
        alt="hero image"
        fill
      />
    </div>
  );
}
