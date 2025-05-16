import { clsx } from "clsx";

export const container = clsx('flex items-center justify-between py-4');
export const itemHeading = clsx('text-lg font-medium');
export const rowBody = clsx('flex items-center gap-4');
export const spanItem = clsx('text-sm text-gray-700');
export const buttonStyles = clsx(
    'bg-black text-white px-4 py-1 text-sm hover:bg-gray-800 transition'
);
export const descriptionBody = clsx(
    'text-sm text-gray-600 pb-4 px-2'
);