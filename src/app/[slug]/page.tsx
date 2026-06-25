import { Metadata } from "next";
import MainView from "@/components/layout/MainView";

const seoConfig: Record<string, { title: string; description: string; schemaType: string }> = {
  about: {
    title: "About Us | Avizakta Enterprises",
    description: "Learn about Avizakta Enterprises, our vision, and the founders behind our engineering excellence and premium manufacturing solutions.",
    schemaType: "AboutPage",
  },
  divisions: {
    title: "Our Divisions | Avizakta Enterprises",
    description: "Explore the diverse divisions of Avizakta, from Decobox to Bovex, specializing in architectural lighting and industrial manufacturing.",
    schemaType: "WebPage",
  },
  engineering: {
    title: "Engineering Excellence | Avizakta Enterprises",
    description: "Discover our cutting-edge research, product design, and process engineering capabilities that drive our technological solutions.",
    schemaType: "Service",
  },
  projects: {
    title: "Global Projects & Presence | Avizakta Enterprises",
    description: "View our global presence and the innovative projects we have delivered worldwide in commercial and residential lighting.",
    schemaType: "WebPage",
  },
  contact: {
    title: "Contact Us | Avizakta Enterprises",
    description: "Get in touch with Avizakta Enterprises for custom lighting solutions, OEM manufacturing, and industrial engineering inquiries.",
    schemaType: "ContactPage",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const config = seoConfig[resolvedParams.slug] || {
    title: "Avizakta Enterprises",
    description: "Modern Industrial Excellence",
    schemaType: "WebPage",
  };

  return {
    title: config.title,
    description: config.description,
    alternates: {
      canonical: `https://avizakta.com/${resolvedParams.slug}`,
    },
    openGraph: {
      title: config.title,
      description: config.description,
      url: `https://avizakta.com/${resolvedParams.slug}`,
    },
    twitter: {
      title: config.title,
      description: config.description,
    },
  };
}

export default async function SlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const config = seoConfig[resolvedParams.slug] || { schemaType: "WebPage" };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": config.schemaType,
    "name": seoConfig[resolvedParams.slug]?.title || "Avizakta",
    "description": seoConfig[resolvedParams.slug]?.description,
    "url": `https://avizakta.com/${resolvedParams.slug}`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://avizakta.com/${resolvedParams.slug}`
    }
  };

  // Map slug to the section ID to scroll to
  const slugToSectionMap: Record<string, string> = {
    about: "company",
    divisions: "divisions",
    engineering: "capabilities",
    projects: "global-presence",
    contact: "contact",
  };

  const sectionId = slugToSectionMap[resolvedParams.slug] || "home";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <MainView initialScrollTo={sectionId} />
    </>
  );
}
