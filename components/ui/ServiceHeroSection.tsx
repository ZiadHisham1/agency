// components/ServiceHeroMedia.tsx
import Image from "next/image";
import type { Service } from "@/lib/queries";

export default function ServiceHeroMedia({ service }: { service: Service }) {
  const type = service.heroMediaType ?? (service.heroImage ? "image" : undefined);

  // Image
  if (type === "image" && service.heroImage) {
    return (
      <Image
        src={service.heroImage}
        alt={service.heroImageAlt ?? service.title}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
    );
  }

  // YouTube
  if (type === "youtube" && service.heroYoutubeId) {
    return (
      <iframe
        src={`https://www.youtube.com/embed/${service.heroYoutubeId}?autoplay=1&mute=1&loop=1&playlist=${service.heroYoutubeId}&controls=0&showinfo=0&modestbranding=1&playsinline=1&rel=0`}
        title={`${service.title} — background video`}
        allow="autoplay; encrypted-media; picture-in-picture"
        allowFullScreen
        className="pointer-events-none absolute inset-0 h-full w-full"
        style={{ transform: "scale(1.2)" }}  // crop YouTube's letterboxed edges
      />
    );
  }

  // Uploaded file
  if (type === "file" && service.heroVideoUrl) {
    return (
      <video
        autoPlay
        muted
        loop
        playsInline
        poster={service.heroVideoPoster}
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={service.heroVideoUrl} type="video/mp4" />
      </video>
    );
  }

  // No hero media — render nothing (dark bg fallback still shows)
  return null;
}