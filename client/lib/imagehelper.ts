// src/lib/imagehelper.ts

const images = import.meta.glob("@/assets/images/*.{jpg,jpeg,png,webp}", {
  eager: true,
});

// Get all image paths and sort them alphabetically/numerically
const entries = Object.entries(images);
entries.sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }));

export const imageList: string[] = entries.map(([_, module]: any) => module.default);

// Optional helpers (adjust indices after checking your actual order)
export const heroImage = imageList[0];        // usually profile pic
export const aboutImages = imageList.slice(1, 4);
export const projectImages = imageList.slice(4, 8);
export const galleryImages = imageList.slice(8);