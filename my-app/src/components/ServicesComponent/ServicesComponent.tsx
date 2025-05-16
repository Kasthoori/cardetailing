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