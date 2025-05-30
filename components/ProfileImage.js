import Image from 'next/image';

export default function ProfileImage({ src, alt, size = 200 }) {
  return (
    <div className="relative">
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        className="rounded-full object-cover shadow-lg"
        priority
      />
    </div>
  );
}