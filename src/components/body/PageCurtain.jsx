import { motion, AnimatePresence } from "framer-motion";
import { Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";

export default function PageCurtain({ children }) {
  const [phase, setPhase] = useState("intro");

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setPhase("curtain");
    }, 2000);

    const timer2 = setTimeout(() => {
      setPhase("done");
    }, 3400);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <Box sx={{ position: "relative", overflow: "hidden" }}>
      {children}

      <AnimatePresence>
        {phase !== "done" && (
          <>
            {/* Intro Screen */}
            {phase === "intro" && (
              <motion.div
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                style={{
                  position: "fixed",
                  inset: 0,
                  background: "#0a0a0a",
                  zIndex: 9999,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      color: "white",
                      fontWeight: 700,
                      letterSpacing: 2,
                    }}
                  >
                    Welcome to my portfolio
                  </Typography>
                </motion.div>
              </motion.div>
            )}

            {/* Left Curtain */}
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: phase === "curtain" ? "-100%" : 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "50%",
                height: "100vh",
                background: "#111",
                zIndex: 9998,
              }}
            />

            {/* Right Curtain */}
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: phase === "curtain" ? "100%" : 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              style={{
                position: "fixed",
                top: 0,
                right: 0,
                width: "50%",
                height: "100vh",
                background: "#111",
                zIndex: 9998,
              }}
            />
          </>
        )}
      </AnimatePresence>
    </Box>
  );
}
