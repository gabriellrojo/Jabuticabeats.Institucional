"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const ScrollReveal = ({ children }: { children: React.ReactNode }) => {
    const sectionRef = useRef(null);
    const [hasAnimated, setHasAnimated] = useState(false);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const isInView = useInView(sectionRef, { once: true, margin: "0px 0px -50px 0px" });

    useEffect(() => {
        if (isClient && isInView && !hasAnimated) {
            setHasAnimated(true);
        }
    }, [isClient, isInView, hasAnimated]);

    return (
        <motion.div
            ref={sectionRef}
            initial={{ opacity: 0, y: 50 }}
            animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full"
        >
            {children}
        </motion.div>
    );
};

export default ScrollReveal;