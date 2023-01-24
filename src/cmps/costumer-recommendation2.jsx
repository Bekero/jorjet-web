
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import mediumZoom from "medium-zoom"
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function CostumerRecommendation2() {

    const [selectedId, setSelectedId] = useState(null)

    return (
        <div>
            {/* {
                items.map(item => (
                    <motion.div layoutId={item.id} onClick={() => setSelectedId(item.id)}>
                        <motion.h5>{item.subtitle}</motion.h5>
                        <motion.h2>{item.title}</motion.h2>
                    </motion.div>
                ))
            } */}
            <motion.div onClick={() => setSelectedId(1)}>
                <motion.h5>H2 !!</motion.h5>
                <motion.h2>Title</motion.h2>
            </motion.div>
            < AnimatePresence >
                {selectedId && (
                    <motion.div layoutId={selectedId}>
                        <motion.h5>H2 !!</motion.h5>
                        <motion.h2>Title</motion.h2>
                        <motion.button onClick={() => setSelectedId(null)} />
                    </motion.div>
                )}
            </AnimatePresence >
        </div>

    )
}
