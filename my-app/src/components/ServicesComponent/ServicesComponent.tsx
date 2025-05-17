import { FC, useState } from "react";
import ServiceItem from "./ServicesItems/ServiceItem";
import {
    container,
    serviceHeading,
} from "./ServicesComponents.styles";

import { services } from "../../data/servicesData";
const ServicesComponent:FC = () => {

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <div className={container}>   
            <h1 className={serviceHeading}>Our Services</h1>  
            {services.map((service, index) => (
                <ServiceItem
                    key={service.id}
                    title={service.title}
                    price={service.price}
                    description={service.description}
                    currency={service.currency}
                    image={service.image}
                    alt={service.title}
                    details={service.details}
                    isOpen={openIndex === index}
                    onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                />
            ))} 
            
        </div>
    );
}

export default ServicesComponent;