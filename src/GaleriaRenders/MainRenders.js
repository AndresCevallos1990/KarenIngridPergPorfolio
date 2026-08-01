import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const MainRenders = () => {

    const [indexFolder, setIndexFolder] = useState(null);

    const fotos = [
        {
            imagenes: [
                "https://res.cloudinary.com/drfdelucd/image/upload/v1785607211/KG-002_Render_Exterior_1_v0ysiv.png",
                "https://res.cloudinary.com/drfdelucd/image/upload/v1785607210/KG-002_Render_Interior_3_sujm84.png",
                "https://res.cloudinary.com/drfdelucd/image/upload/v1785607211/KG-002_Render_Interior_2_hba1pp.png",
                "https://res.cloudinary.com/drfdelucd/image/upload/v1785607211/KG-002_Render_Interior_1_otll3k.png",
            ]
        },
        {
            imagenes: [
                "https://res.cloudinary.com/drfdelucd/image/upload/v1785607373/GT_-_Interior_1_orgnq8.png",
                "https://res.cloudinary.com/drfdelucd/image/upload/v1785607373/GT_-_Exterior_1_jcjtch.png",
            ]

        },
        {
            imagenes: [
                "https://res.cloudinary.com/drfdelucd/image/upload/v1785607409/LP_EXT_2_eikrqb.png",
                "https://res.cloudinary.com/drfdelucd/image/upload/v1785607409/LP_INT_1_zqeokb.png",
                "https://res.cloudinary.com/drfdelucd/image/upload/v1785607410/LP_INT_2_yq6sl1.png",
                "https://res.cloudinary.com/drfdelucd/image/upload/v1785607411/LP_EXT_1_ebedji.png",
            ]
        },
        {
            imagenes: [
                "https://res.cloudinary.com/drfdelucd/image/upload/v1785607463/IMG_20210514_095605786_HDR_tlssub.jpg",
                "https://res.cloudinary.com/drfdelucd/image/upload/v1785607460/IMG_20210514_094259992_HDR_uawy6u.jpg",
                "https://res.cloudinary.com/drfdelucd/image/upload/v1785607461/IMG_20210514_125147008_HDR_qkr3tz.jpg",
                "https://res.cloudinary.com/drfdelucd/image/upload/v1785607462/IMG_20210514_095921206_HDR_fjm6eh.jpg",
                "https://res.cloudinary.com/drfdelucd/image/upload/v1785607458/IMG_20210514_094356408_HDR_cud6sk.jpg",
                "https://res.cloudinary.com/drfdelucd/image/upload/v1785607465/IMG_20210514_093737597_HDR_vciakg.jpg",
            ]

        },
        {
            imagenes: [
                "https://res.cloudinary.com/drfdelucd/image/upload/v1785607518/KG_INT_3_tafifu.png",
                "https://res.cloudinary.com/drfdelucd/image/upload/v1785607518/KG_INT_4_s8tvgn.png",
                "https://res.cloudinary.com/drfdelucd/image/upload/v1785607516/KG_EXT_1_uvemjg.png",
                "https://res.cloudinary.com/drfdelucd/image/upload/v1785607517/KG_INT_2_jh0iea.png",
            ]
        }
    ];

    console.log("MainRenders renderizado");

    return (
        <div className="main-renders">

            <AnimatePresence mode="wait">

                {indexFolder === null ? (

                    <motion.div
                        key="galerias"
                        className="image-gallery"
                        initial={{ opacity: 0, scale: .95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: .95 }}
                        transition={{ duration: .35 }}
                    >

                        {fotos.map((item, index) => (
                            <motion.img
                                key={index}
                                src={item.imagenes[0]}
                                alt=""
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: .95 }}
                                onClick={() => setIndexFolder(index)}
                            />
                        ))}

                    </motion.div>

                ) : (

                    <motion.div
                        key={`galeria-${indexFolder}`}
                        className="selected-gallery"
                        initial={{ opacity: 0, scale: .95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: .95 }}
                        transition={{ duration: .35 }}
                    >

                        <button
                            className="btn-back"
                            onClick={() => setIndexFolder(null)}
                        >
                            ← Volver
                        </button>

                        <div className="selected-images">

                            <AnimatePresence>

                                {fotos[indexFolder].imagenes.map((img, index) => (

                                    <motion.img
                                        key={img}
                                        src={img}
                                        alt=""
                                        initial={{
                                            opacity: 0,
                                            y: 20,
                                            scale: .9
                                        }}
                                        animate={{
                                            opacity: 1,
                                            y: 0,
                                            scale: 1
                                        }}
                                        transition={{
                                            delay: index * .08,
                                            duration: .35
                                        }}
                                    />

                                ))}

                            </AnimatePresence>

                        </div>

                    </motion.div>

                )}

            </AnimatePresence>

        </div>
    );
};

export default MainRenders;