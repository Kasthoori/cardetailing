import { FC } from "react";
import {motion, AnimatePresence} from "framer-motion";
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
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <div className={descriptionBody}>
                            {description}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            {/* {isOpen && (

                <div className={descriptionBody}>
                    {description}
                </div>
            )} */}
        </div>
    );
}

export default ServiceItem;