import Head from "next/head"
import { motion } from "framer-motion"

export function Layout ({ router })
{
    return (
        <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" variants={
            {
                pageInitial:
                {
                    opacity: 0
                },
                pageAnimate:
                {
                    opacity: 1
                },
            }
        }>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Head>
        </motion.div>
    )
}