import { FC, useEffect, useRef, useState } from "react";
import {motion, AnimatePresence} from "framer-motion";
import { ServiceDetailsSection } from "../../../data/servicesData";
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
    price?: number | string;
    currency?: string;
    description:  string;
    image?: string;
    details?: ServiceDetailsSection[];
    alt: string;
    isOpen: boolean;
    onToggle: () => void;
}

const ServiceItem:FC<ServiceItemProps> = ({
    title, 
    price, 
    isOpen, 
    onToggle, 
    description,
    image,
    details,
    currency
}) => {

    const scrollRef = useRef<HTMLDivElement>(null);

    return (
        <div className="border-b">
            <div className={container}>
                <div>
                    <h2 className={itemHeading}>{title}</h2>
                </div>
                <div className={rowBody}>
                    <span className={spanItem}>{price}&nbsp;&nbsp;{currency}</span>
                    <button
                        onClick={onToggle}
                        className={buttonStyles}
                    >
                        {isOpen ? ' Less' : 'More'}
                    </button>
                </div>
            </div>
            <AnimatePresence initial={false}>
              
                {isOpen && (
                    <motion.div
                        key="accordion"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.5 }}
                        onAnimationComplete={() => {
                           if (isOpen && scrollRef.current) {
                              scrollRef.current?.scrollIntoView({behavior: 'smooth', block: 'center'});                           }
                        }}
                        className="overflow-hidden text-sm text-gray-600"
                    >
                        <div className={descriptionBody}>
                        <div className="flex flex-col md:flex-row gap-6" ref={scrollRef}>
                            {image && (
                                <div className="md:w-1/2 w-full">
                                    <img 
                                        src={image}
                                        alt={title}
                                        className="w-full rounded-lg object-cover"
                                    />
                                </div>
                            )}
                         <div className="md:w-3/5 w-full space-y-6">
                            <p>{description}</p>
                            {details?.map((section, index) => (
                                <div key={index}>
                                    {section.title && <p className="font-semibold">{section.title}</p>}
                                    {section.items && (
                                        <ul className="list-disc list-inside text-sm text-gray-700">
                                            {section.items.map((item, i) => (
                                                <li key={i}>{item}</li>
                                            ))}
                                        </ul>
                                    )}
                                    {section.content && (
                                        <p className="text-sm text-gray-700">{section.content}</p>
                                    )

                                    }
                                </div>
                            ))}
                            </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            
            </AnimatePresence>
        </div>
    );
}

export default ServiceItem;