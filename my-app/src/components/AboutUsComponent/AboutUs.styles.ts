import { clsx } from "clsx";

export const container = clsx(
    'bg-black text-white w-full',
    'bg-cover bg-no-repeat bg-center',
    'py-16 px-6 md:px-16'
);

export const heading = clsx(
    'text-1xl md:text-3xl lg:text-5xl font-bold text-center mb-8 font-mono text-gray-300',
);

export const contentWrapper = clsx(
    'flex flex-col md:flex-row items-center justify-between gap-10',
);

export const textSection = clsx(
    'md:w-1/2'
);

export const subHeading = clsx(
    'text-1xl md:text-2xl lg:text-3xl font-semibold text-gray-300 mb-4',
);

export const paragraph= clsx('mb-6 leading-relaxed text-gray-400');

export const button = clsx(
    'px-6 py-2 rounded-full bg-white text-black font-semibold hover:bg-gray-400 transition'
);

export const imageSection = clsx(
    'md:w-1/2'
);