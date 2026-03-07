import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
  Typography,
  IconButton,
  Stack,
} from "@mui/material";

import SendIcon from "@mui/icons-material/Send";
import CallIcon from "@mui/icons-material/Call";
import PersonIcon from "@mui/icons-material/Person";
import CakeIcon from "@mui/icons-material/Cake";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function ContactModal({ open, handleClose }) {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth="xs"
      PaperProps={{
        sx: {
          borderRadius: { xs: 2, sm: 3 },
          p: { xs: 1.5, sm: 2 },
          mx: { xs: 1, sm: 0 },
          backgroundColor: "#fdfdfd",
          boxShadow: "0px 10px 30px rgba(0,0,0,0.15)",
        },
      }}
    >
      <DialogTitle sx={{ pb: { xs: 1, sm: 2 } }}>
        <Typography
          fontWeight={700}
          textAlign="center"
          sx={{ fontSize: { xs: 18, sm: 20 } }}
        >
          Contact Me
        </Typography>
      </DialogTitle>

      <DialogContent
        sx={{
          mt: { xs: 0.5, sm: 1 },
          display: "flex",
          flexDirection: "column",
          gap: { xs: 2, sm: 3 },
        }}
      >
        {/* Personal Info */}
        <Box
          sx={{
            p: { xs: 1.5, sm: 2 },
            borderRadius: 3,
            border: "1px solid #e0e0e0",
            backgroundColor: "#fafafa",
            display: "flex",
            flexDirection: "column",
            gap: { xs: 1, sm: 1.5 },
            boxShadow: "0px 4px 12px rgba(0,0,0,0.05)",
          }}
        >
          <Stack direction="row" alignItems="center" spacing={1}>
            <PersonIcon
              sx={{ color: "#F63049", fontSize: { xs: 20, sm: 24 } }}
            />
            <Typography fontWeight={500} sx={{ fontSize: { xs: 14, sm: 16 } }}>
              Phạm Công Thành
            </Typography>
          </Stack>

          <Stack direction="row" alignItems="center" spacing={1}>
            <CakeIcon sx={{ color: "#F63049", fontSize: { xs: 20, sm: 24 } }} />
            <Typography fontWeight={500} sx={{ fontSize: { xs: 14, sm: 16 } }}>
              28 Feb, 2001
            </Typography>
          </Stack>

          <Stack direction="row" alignItems="center" spacing={1}>
            <LocationOnIcon
              sx={{ color: "#F63049", fontSize: { xs: 20, sm: 24 } }}
            />
            <Typography fontWeight={500} sx={{ fontSize: { xs: 14, sm: 16 } }}>
              Hồ Chí Minh, Việt Nam
            </Typography>
          </Stack>
        </Box>

        {/* Email */}
        <Box
          sx={{
            p: { xs: 1.5, sm: 2 },
            borderRadius: 3,
            backgroundColor: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            border: "1px solid #e0e0e0",
            boxShadow: "0px 2px 6px rgba(0,0,0,0.05)",
            transition: "0.25s all ease",
            "&:hover": { backgroundColor: "#fdf2f2" },
          }}
        >
          <Typography
            fontWeight={600}
            sx={{ fontSize: { xs: 13, sm: 15 }, wordBreak: "break-all" }}
          >
            phamthanh022001@gmail.com
          </Typography>

          <IconButton
            onClick={() =>
              window.open(
                "https://mail.google.com/mail/?view=cm&fs=1&to=phamthanh022001@gmail.com",
                "_blank",
              )
            }
            sx={{ color: "#F63049" }}
          >
            <SendIcon />
          </IconButton>
        </Box>

        {/* Phone */}
        <Box
          sx={{
            p: { xs: 1.5, sm: 2 },
            borderRadius: 3,
            backgroundColor: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            border: "1px solid #e0e0e0",
            boxShadow: "0px 2px 6px rgba(0,0,0,0.05)",
            transition: "0.25s all ease",
            "&:hover": { backgroundColor: "#fdf2f2" },
          }}
        >
          <Typography fontWeight={600} sx={{ fontSize: { xs: 14, sm: 16 } }}>
            +84 932 085 108
          </Typography>

          <IconButton
            onClick={() => (window.location.href = "tel:+84932085108")}
            sx={{ color: "#F63049" }}
          >
            <CallIcon />
          </IconButton>
        </Box>
      </DialogContent>

      <DialogActions sx={{ justifyContent: "center", mt: { xs: 0.5, sm: 1 } }}>
        <Button
          onClick={handleClose}
          sx={{
            textTransform: "none",
            px: { xs: 2.5, sm: 3 },
            py: 1,
            borderRadius: 2,
            fontSize: { xs: 14, sm: 15 },
            color: "#fff",
            backgroundColor: "#343535",
            "&:hover": { backgroundColor: "#000" },
          }}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
