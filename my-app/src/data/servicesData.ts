export interface Service {
    title:  string;
    price: number;
    description: string;
}

export const services: Service[] = [
    {
        title: 'Paint Correction',
        price: 150,
        description: 'A multi-step process that removes imperfections from the paint surface, enhancing clarity and depth.',
    },
    {
        title: 'Full  Car Detailing',
        price: 200,
        description: 'Deep cleaning, polishing, and waxing of the entire vehicle, both interior and exterior.',
    },
    {
        title: 'Ceramic Coating',
        price: 500,
        description: 'A protective layer applied to the paint that provides long-lasting shine and protection against environmental contaminants.',
    },
    {
        title: 'Headlight Restoration',
        price: 75,
        description: 'Restores clarity to foggy or yellowed headlights, improving visibility and appearance.',
    },
    {
        title: 'Interior Shampooing',
        price: 100,
        description: 'Deep cleaning of carpets, upholstery, and mats to remove stains and odors.', 
    },
]
   