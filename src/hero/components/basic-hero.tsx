import Image from 'next/image';

export function BasicHero() {
  return (
    <div className="relative grid grid-cols-2 gap-x-2 py-4">
      <Image
        alt="Hero"
        className="h-full max-h-[500px] w-full object-cover object-center"
        height="500"
        src="/aretes1.jpg"
        width="500"
      />
      <Image
        alt="Hero"
        className="h-full max-h-[500px] w-full object-cover object-center"
        height="500"
        src="/reloj1.jpeg"
        width="500"
      />
    </div>
  );
}
