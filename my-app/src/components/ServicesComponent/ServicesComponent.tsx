import { FC, useState } from "react";
import ServiceItem from "./ServicesItems/ServiceItem";
import {
    container,
    serviceHeading,
} from "./ServicesComponents.styles";

const services = [
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

const ServicesComponent:FC = () => {

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <div className={container}>   
            <h1 className={serviceHeading}>Services</h1>  
            {services.map((service, index) => (
                <ServiceItem
                    key={index}
                    title={service.title}
                    price={service.price.toString()}
                    description={service.description}
                    image={""}
                    alt={""}
                    isOpen={openIndex === index}
                    onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                />
            ))} 
            
        </div>
    );
}

export default ServicesComponent;