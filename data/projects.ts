// Work shown on the Work page and the case study pages.
//
// HOW TO ADD THINGS
// - A new sample category on the Work page: add an entry to `workCategories`.
// - New images for a category: put the files in /public/gallery/<folder>/ and
//   add one line to that category's `media` list.
// - A new case study page: add an entry to `projects`. It appears at
//   /work/<slug>. Only add details you can stand behind (no invented results).

export type MediaItem = {
  type: "photo" | "video";
  src: string;
  alt: string;
};

export type WorkCategory = {
  slug: string;
  name: string;
  brand?: string; // the client or brand the samples were made for
  description: string;
  media: MediaItem[]; // leave empty until samples are ready
};

export type Project = {
  slug: string;
  name: string;
  category: string;
  role: string;
  period: string;
  objective: string;
  contentFocus: string[];
  strategy?: string; // add a short paragraph here to show a "Strategy" section
  results: { value: string; label: string }[];
  views?: { month: string; views: number }[];
  coverSrc: string;
  coverAlt: string;
  samplesSlug?: string; // the workCategories entry shown as samples
};

const photos = (folder: string, files: string[], alt: string): MediaItem[] =>
  files.map((file, i) => ({
    type: "photo",
    src: `/gallery/${folder}/${file}`,
    alt: files.length > 1 ? `${alt} ${i + 1}` : alt,
  }));

const videos = (folder: string, files: string[], alt: string): MediaItem[] =>
  files.map((file, i) => ({
    type: "video",
    src: `/gallery/${folder}/${file}`,
    alt: files.length > 1 ? `${alt} ${i + 1}` : alt,
  }));

export const projects: Project[] = [
  {
    slug: "faco",
    name: "FACO",
    category: "Digital Skills & Education",
    role: "Social Media Manager",
    period: "July to October",
    objective:
      "To strengthen the brand's online presence and communicate its educational opportunities and digital skills offerings more effectively.",
    contentFocus: [
      "Education",
      "Storytelling",
      "Inspiration",
      "Opportunities",
      "Digital Skills",
    ],
    results: [
      { value: "+624%", label: "increase in content views, July to October" },
    ],
    views: [
      { month: "Jul", views: 741 },
      { month: "Aug", views: 3147 },
      { month: "Sep", views: 4834 },
      { month: "Oct", views: 5360 },
    ],
    coverSrc: "/gallery/carousel/photo_3_2026-08-31_13-16-54.jpg",
    coverAlt: "A FACO carousel post designed by Paul",
    samplesSlug: "carousels-faco",
  },
];

export const workCategories: WorkCategory[] = [
  {
    slug: "bio-revamp",
    name: "Bio Revamp",
    description:
      "Refreshed profile bios written to communicate brand identity clearly and attract the right audience.",
    media: photos(
      "bio-revamp",
      [
        "photo_7_2026-08-30_03-44-48.jpg",
        "photo_8_2026-08-30_03-43-54.jpg",
        "photo_8_2026-08-30_03-47-26.jpg",
        "photo_13_2026-08-31_13-16-54.jpg",
      ],
      "Bio revamp sample",
    ),
  },
  {
    // NEW. Draft description: edit it freely. Add images to
    // /public/gallery/bio-audit/ and list them in `media`.
    slug: "bio-audit",
    name: "Bio Audit",
    description:
      "A review of a brand's profile bio, showing what works, what is unclear and what to change to attract the right audience.",
    media: photos(
  "bio-audit",
  ["photo_2026-11-08_15-59-29.jpg"],
  "Bio audit sample",
),
  },
  {
    slug: "page-revamp",
    name: "Page Revamp",
    description:
      "Full page makeovers covering visuals, layout and messaging for a more polished brand presence.",
    media: photos(
      "page-revamp",
      [
        "photo_6_2026-08-30_03-43-53.jpg",
        "photo_11_2026-08-30_03-43-54.jpg",
      ],
      "Page revamp sample",
    ),
  },
  {
    slug: "content-calendar",
    name: "Content Calendar",
    description:
      "Structured content calendars keeping posting consistent, organised and aligned with strategy.",
    media: photos(
      "content-calendar",
      ["photo_16_2026-08-31_13-16-55.jpg"],
      "Content calendar sample",
    ),
  },
  {
    // NEW. Draft description: edit it freely. Add images to
    // /public/gallery/captions/ and list them in `media`.
    slug: "captions",
    name: "Captions",
    description:
      "Captions written to carry the brand's voice, support the visual and invite the audience to engage.",
    media: photos(
      "captions",
      ["captions.jpg"],

    ),
  },
  {
    slug: "carousels-faco",
    name: "Carousels",
    brand: "FACO",
    description:
      "Multi-slide carousel posts designed to educate, engage and hold attention scroll after scroll.",
    media: photos(
      "carousel",
      [
        "photo_3_2026-08-31_13-16-54.jpg",
        "photo_4_2026-08-31_13-16-54.jpg",
        "photo_5_2026-08-31_13-16-54.jpg",
        "photo_6_2026-08-31_13-16-54.jpg",
        "photo_7_2026-08-31_13-16-54.jpg",
        "photo_10_2026-08-31_13-16-54.jpg",
        "photo_11_2026-08-31_13-16-54.jpg",
        "photo_12_2026-08-31_13-16-54.jpg",
      ],
      "FACO carousel slide",
    ),
  },
  {
    slug: "carousels-o-gadgets",
    name: "Carousels",
    brand: "O Gadgets",
    description:
      "Multi-slide carousel posts designed to educate, engage and hold attention scroll after scroll.",
    media: photos(
      "carousels",
      [
        "photo_2_2026-08-30_03-47-24.jpg",
        "photo_3_2026-08-30_03-47-24.jpg",
        "photo_4_2026-08-30_03-47-25.jpg",
        "photo_5_2026-08-30_03-45-58.jpg",
        "photo_6_2026-08-30_03-45-58.jpg",
      ],
      "O Gadgets carousel slide",
    ),
  },
  {
    slug: "graphic-design",
    name: "Graphic Design",
    description: "Graphics, carousels and branded visual content.",
    media: photos(
      "graphic-design",
      [
        "photo_1_2026-08-30_03-47-24.jpg",
        "photo_1_2026-08-31_13-16-53.jpg",
        "photo_9_2026-08-30_03-45-58.jpg",
      ],
      "Graphic design sample",
    ),
  },
  {
    slug: "analytics-reporting",
    name: "Analytics & Reporting",
    description: "Tracking performance and turning data into insights.",
    media: photos(
      "analytics",
      [
        "photo_5_2026-08-30_03-43-53.jpg",
        "photo_9_2026-08-30_03-44-48.jpg",
        "photo_10_2026-08-30_03-43-54.jpg",
        "photo_15_2026-08-31_13-16-55.jpg",
      ],
      "Analytics report sample",
    ),
  },
  {
    // The video file is large and is added by hand to /public/gallery/ai-content/.
    slug: "ai-creative-content",
    name: "AI & Creative Content",
    description:
      "AI powered creative tools supporting ideation and visual development.",
    media: videos("ai-content", ["IMG_4826.MP4","IMG_5690.MP4", "IMG_5691.MOV"], "AI-generated content sample"),
  },
  {
    slug: "testimonials",
    name: "Testimonial Graphics",
    description:
      "Client testimonials turned into shareable social proof that builds trust with new audiences.",
    media: photos(
      "testimonials",
      ["photo_7_2026-08-30_03-47-26.jpg"],
      "Client testimonial shared as social proof",
    ),
  },
  {
    // The large video files are added by hand to
    // /public/gallery/video-editing-voiceover/.
    slug: "video-editing-voiceover",
    name: "Video Editing & Voiceover",
    description: "Sample edited video and voiceover work.",
    media: [
      ...videos("video-editing-voiceover", ["IMG_4701.MOV"], "Voiceover sample"),
      ...videos(
        "video-editing-voiceover",
        ["IMG_4793.MP4", "IMG_4813.MP4",],
        "Edited video sample",
      ),
    ],
  },
];

export const getProject = (slug: string) =>
  projects.find((project) => project.slug === slug);

export const getCategory = (slug: string) =>
  workCategories.find((category) => category.slug === slug);
