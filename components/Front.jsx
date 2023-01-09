import Image from "next/image";

export default function Front() {
  return (
    <>
      <div className="relative w-full h-screen">
        <Image
          src="/imgs/barn-door-hero.webp"
          alt="hero image"
          fill
          quality="100"
        />
      </div>
      <div className="z-40 mt-32 text-black absolute top-[20vh] left-[50vw]">
    <h1>MODERNÉ</h1>
    <h1>&nbsp;&nbsp;ELEGANTNÉ</h1>
    <h1>&nbsp;&nbsp;&nbsp;&nbsp;NEPREHLIADNUTEĽNÉ</h1>
    <a href="">INŠPIRUJTE SA...</a>
  </div>
    </>
  );
}
