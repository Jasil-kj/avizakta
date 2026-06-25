import MainView from "@/components/layout/MainView";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    "name": "Avizakta Enterprises",
    "url": "https://avizakta.com",
    "logo": "https://avizakta.com/images/Avizakta_Gold_Logo.png",
    "description": "Avizakta Enterprises stands at the vanguard of industrial design and technical manufacturing. We specialize in engineering excellence, architectural lighting, and smart manufacturing.",
    "sameAs": [
      "https://wa.me/919383428349"
    ]
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "AVIZAKTA | Modern Industrial Excellence",
    "url": "https://avizakta.com",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <MainView />
    </>
  );
}
