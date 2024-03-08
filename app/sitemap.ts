import { getAllEvents } from "@/services/events";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseURL = "https://www.soarx.tech";

  let eventsEntries: MetadataRoute.Sitemap = [];

  try {
    const events = await getAllEvents();

    eventsEntries = (events?.map((event) => ({
      url: `${baseURL}/event/${encodeURIComponent(event?.slug!)}`,
      lastModified: event.updatedAt,
    })) ?? []) as MetadataRoute.Sitemap;
  } catch (error) {
    console.error("Failed to get all events:", error);
  }

  return [
    {
      url: `${baseURL}/events`,
    },
    {
      url: `${baseURL}/about`,
    },
    {
      url: `${baseURL}/sign-in`,
    },
    {
      url: `${baseURL}/sign-up`,
    },

    {
      url: `${baseURL}/dsa`,
    },

    ...eventsEntries,
  ];
}
