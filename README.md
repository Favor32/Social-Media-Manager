# Paul Omowunmi Bisola — Social Media Manager

Portfolio website built with Next.js (App Router), Tailwind CSS v4 and react-icons.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (run this before deploying)
```

## Where things live

| What | Where |
| --- | --- |
| Name, email, social links, form endpoint, nav | `data/site.ts` |
| Services, home highlights, "My focus" | `data/services.ts` |
| Tools on the Toolkit page | `data/tools.ts` |
| Case studies (`/work/<slug>`) and Work page samples | `data/projects.ts` |
| Testimonials | `data/testimonials.ts` |
| Colours and shared styles | `app/globals.css` |
| Page sections | `app/components/sections/` |
| Reusable pieces (cards, lightbox, chart) | `app/components/ui/` |

Each page file in `app/` is short: it only puts sections together.

## Common updates

**Add images to a Work category.** Copy the files into `public/gallery/<folder>/`,
then add the file name to that category's list in `data/projects.ts`.
Bio Audit and Captions are already in the list and show a placeholder until
you add images (folders: `public/gallery/bio-audit/`, `public/gallery/captions/`).

**Add a new category of work.** Copy an entry in `workCategories` in `data/projects.ts`.

**Add a testimonial.** Open `data/testimonials.ts` and follow the example in the
comment. The "What clients say" section appears on the home page as soon as there
is at least one entry.

**Add a case study.** Add an entry to `projects` in `data/projects.ts`. It gets its
own page at `/work/<slug>`. Add a `strategy` paragraph to show a Strategy section.

**Change colours.** Edit the `--color-*` values at the top of `app/globals.css`.

## Videos

Videos are large, so keep them small before uploading (1080p MP4, under about
10 MB each is a good target). The Work page shows the first frame of each video and
only downloads the file when someone plays it.
