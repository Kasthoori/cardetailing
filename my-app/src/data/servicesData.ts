export interface ServiceDetailsSection {
    title?: string;
    items?: string[];
    content?: string;
}

export interface Service {
    id: string;
    title:  string;
    price?: number;
    currency?: string;
    description: string;
    image?: string;
    details?: ServiceDetailsSection[];
    alt?: string;
}

export const services: Service[] = [
   {
       id: 'basic',
       title: 'Basic Package',
       price: 110,
       currency: 'NZD',
       description: 'Exterior and interior cleaning for all car sizes',
       image: '/src/assets/basic.jpeg',
       details: [
             {
                title: 'Includes',
                items: [
                    'Exterior wash / Snow canon',
                    'Exterior rinse and dry',
                    'Interior and exterior glass clean',
                    'Interior vacuum',
                    'Boot vacuum',
                    'Interior dust, wipe, and dressing',
                    'Door jabs wash and clean',
                    'Wheel & tyre deep clean',
                    'Mud flaps wash',
                    'Tyre gloss',
                ],
             },
             {
                title: 'Prices (Excluding GST)',
                items: [
                    'Small car - 110.00 NZD',
                    'Medium car - 140.00 NZD',
                    'Large car - 160.00 NZD',
                ],
             },
             {
                content: 'Duration: 2hrs - 3hrs',
             },
             {
                title: 'Notes',
                items: [
                    'Prices and durations depend on the size and condition of the vehicle.',
                    'Surcharges may apply for excessive dirt vehicles (to be discussed before confirmation).',
                ],
             },
       ],
   },

   {
      id: 'extra',
      title: 'Extra Package',
      price: 180,
      currency: 'NZD',
      description: 'Includes everything in the Basic Package.',
      image: '/src/assets/extraPackage.jpeg', 
      details: [
            {
                title: 'Includes',
                items: [
                    'PH neutral foam prewash',
                    'Air vents clean',
                    'Hand Polish',
                    'Interior and exterior protectant',
                    'Fragrance',
                    'Engine bay wash and gloss',
                ],
            },
            {
                title: 'Prices (Excluding GST)',
                items: [
                    'Small car - 180.00 NZD',
                    'Medium car - 250.00 NZD',
                    'Large car - 320.00 NZD',
                ],
            },
            {
                content: 'Duration: 3hrs - 4hrs',
            },
            {
                title: 'Notes',
                items: [
                    'Prices and durations depends on the size and condition of the vehicle. Surcharges may apply'
                    + 'for extra dirty vehicles (to be discussed befere confirmation).',
                ],
            },
      ],
   },

   {
            id: 'vip',
            title: 'VIP Package',
            price: 350,
            currency: 'NZD',
            description: 'Includes everything in the Extra Plus.',
            image: '/src/assets/vipPackage.jpeg',
            details: [
                {
                    title: 'Includes',
                    items: [
                        'Exterior cut and polish',
                        'Hand Buff',
                        'Mats wash',
                        'Interior steam clean',
                        'Headlight polish',
                    ],
                },
                {
                    title: 'Prices (Excluding GST)',
                    items: [
                        'Small car - 350.00 NZD',
                        'Medium car - 360.00 NZD',
                        'Large car - 520.00 NZD',
                    ],
                },
                {
                    content: 'Duration: 4hrs - 6hrs',
                },
                {
                    title: 'Notes',
                    items: [
                        'Prices and durations depends on the size and condition of the vehicle. Surcharges may apply'
                        + 'for extra dirty vehicles (to be discussed befere confirmation).',
                    ],
                },
            ],
   },

   {
         id: 'ceramic',
         title: 'Ceramic Coating',
         price: 500,
         currency: 'NZD',
         description: 'Revive Auto Detailing - 2 Year Ceramic Coating Package. Protect your ride with a slick, glossy finish that lasts! Our 2 year ceramic coating offers Long-lasting protection against UV rays, dirt, and grime. Enjoy a hydrophobic surface that repels water and makes cleaning a breeze. Experience the ultimate shine and gloss, UV protection to prevent fading and oxidation, Hydrophobic effect'
         + 'repels water, dirt, and grime, Easier cleaning - contaminants don\'t stick as easily, Chemical resistance and protects from bird droppings, snap, and road salts, Boosts resale value by keeping the paint looking newer and longer.',
         image: '/src/assets/ceramicCoating.jpg',
         details: [
                 {
                 title: 'Includes',
                 items: [
                      'Full exterior wash & decontamination',
                      'Clay bar treatment',
                      'Light machine polish (to enhance gloss)',
                      '1 - Year ceramic coating applied to paint',
                      'Wheels & Windows cleaned',
                      'Tyre shine finish',
                 ],
                 },
                 {
                 title: 'Prices (Excluding GST, Cars & Utes Only)',
                 items: [
                      'Small (e.g. Hatchbacks) - 499.00 NZD',
                      'Medium (e.g. Sedans, Compact SUVs) - 599.00 NZD',
                      'Large (e.g. Full-size SUVs, Double cab utes) - 699.00 NZD',
                 ],
                 },
                 {
                 content: 'Duration: 3hrs - 4hrs',
                 },
                 {
                 title: 'Notes',
                 items: [
                      'Heavily contaminated or oxidized paint may require extra prep at an additional cost.'
                 ],
            },
         ],
   },

   {
        id: 'addons',
        title: 'Add-ons Menu',
        description: 'This includes extra services offer from Revive Auto Detailing.',
        image: '/src/assets/addonPackage.jpeg',
        details: [
                {
                    title: 'Includes',
                    items: [
                        'Engine Bay wash and Gloss - 40.00 NZD',
                        'HeadLight Restoration - 70.00 NZD',
                        'Odour Elemination - 90.00 NZD',
                        'Pet Hair Removal - 60.00 NZD',
                        'Leather Treatment and Conditioning - 50.00 NZD',
                        'Steam Cleaning - 100.00 NZD',
                    ],
                },
                {
                    title: 'Seat Shampoo Options',
                    items: [
                        'Seat Shampoo x 1 - 35.00 NZD',
                        'Seat Shampoo x 2 - 65.00 NZD',
                        'Seat Shampoo Package - 115.00 NZD',
                    ],
                },
                {
                    title: 'Floor Cleaning',
                    items: [
                        'Floor Scrub and Shampoo - 150.00 NZD',
                        'Mats Shampoo - 70.00 NZD',
                    ],
                },
                {
                    title: '1 - Stage Polish (Full Body)',
                    items: [
                        'Small car - 100.00 NZD',
                        'Medium car - 130.00 NZD',
                        'SUV / Van - 160.00 NZD',
                    ],
                },
                {
                    title: '2 - Stage Polish (Full Body)',
                    items: [
                        'Small car - 200.00 NZD',
                        'Medium car - 230.00 NZD',
                        'SUV / Van - 260.00 NZD',
                    ],
                },
                
            ],
   },
   // ... Add more
];
   