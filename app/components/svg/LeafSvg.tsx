"use client";

import { motion } from "framer-motion";

function LeafSvg() {
  return (
    <motion.svg
      viewBox="0 0 350 553"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <g id="leaf-animation">
        <motion.path
          id="leaf"
          d="M49.7748 553C53.5355 440.972 100.968 328.846 180.92 246.477C229.052 196.879 285.019 160.963 347.263 139.739C348.169 139.424 349.083 139.196 350 138.901C349.144 136.18 348.445 133.372 347.51 130.705C327.617 73.4342 290.422 29.0504 244.19 0C192.928 17.5886 145.899 48.6509 106.301 91.8705C66.7929 135.068 34.9215 190.26 16.3874 254.661C-2.11722 319.039 -4.53872 383.493 7.0454 442.386C15.0003 482.439 29.35 520.097 49.7748 553Z"
          fill="#548235"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
        <motion.path
          id="innerleaf"
          d="M41.1144 513.765C41.1144 513.765 8.15214 404.888 32.7402 347.193M32.7402 347.193L76.4679 278.27M32.7402 347.193C32.7402 347.193 44.2557 247.858 38.8068 255.783M32.7402 347.193L85.8698 344.795M120.196 209.346C120.196 209.346 211.883 87.0915 254.252 95.0232M120.196 209.346C120.196 209.346 120.806 104.217 132.344 104.548M120.196 209.346L76.4679 278.27M120.196 209.346L258.472 171.518M76.4679 278.27C76.4679 278.27 89.4804 166.021 74.1195 168.267M76.4679 278.27C76.4679 278.27 137.559 285.352 142.036 272.784"
          stroke="#327945"
          strokeWidth="8"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 0.5,
          }}
        />
      </g>
    </motion.svg>
  );
}

export default LeafSvg;
