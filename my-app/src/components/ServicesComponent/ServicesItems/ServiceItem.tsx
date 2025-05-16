import { FC } from "react";
import {
    container,
    itemHeading,
    rowBody,
    spanItem,
    buttonStyles,
    descriptionBody
} from "./ServiceItem.styles";

interface ServiceItemProps {
    title: string;
    price: string;
    description:  string;
    image: string;
    alt: string;
    isOpen: boolean;
    onToggle: () => void;
}

const ServiceItem:FC<ServiceItemProps> = ({title, price, isOpen, onToggle, description}) => {
    return (
        <div className="border-b">
            <div className={container}>
                <div>
                    <h2 className={itemHeading}>{title}</h2>
                </div>
                <div className={rowBody}>
                    <span className={spanItem}>{price}</span>
                    <button
                        onClick={onToggle}
                        className={buttonStyles}
                    >
                        {isOpen ? 'Hide' : 'Book Now'}
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className={descriptionBody}>
                    {description}
                </div>
            )}
        </div>
    );
}

export default ServiceItem;