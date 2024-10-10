import React from "react";
import { Container, Typography, Grid, IconButton } from "@mui/material";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 relative py-8 z-50 mt-10">
      <Container>
        <Grid container spacing={3} justifyContent="space-between">
          {/* Social Media Links */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              className="text-yellow-400 font-outfit mb-4"
            >
              <span className=" font-outfit">Social Media</span>
            </Typography>
            <div className="flex space-x-4">
              <IconButton
                href="https://www.linkedin.com/in/muhammad-ayaan-shaikh/"
                target="_blank"
                aria-label="LinkedIn"
                className="text-yellow-400 hover:text-white"
              >
                <FaLinkedin size={30} />
              </IconButton>
              <IconButton
                href="https://github.com/Ayaanshaikh20"
                target="_blank"
                aria-label="GitHub"
                className="text-yellow-400 hover:text-white"
              >
                <FaGithub size={30} />
              </IconButton>
              <IconButton
                href="https://www.facebook.com/profile.php?id=100004227799035"
                target="_blank"
                aria-label="facebook"
                className="text-yellow-400 hover:text-white"
              >
                <FaFacebook size={30} />
              </IconButton>
              <IconButton
                href="mailto:officialayaanshaikh@gmail.com"
                aria-label="Email"
                className="text-yellow-400 hover:text-white"
              >
                <FaEnvelope size={30} />
              </IconButton>
            </div>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              className="text-yellow-400 font-outfit mb-4"
            >
              <span className=" font-outfit">Contact Info</span>
            </Typography>
            <Typography variant="body2" className="text-slate-400">
              <span className=" font-outfit">Belgaum, Karnataka, India</span>
            </Typography>
            <Typography variant="body2" className="text-slate-400">
              <span className=" font-outfit">
                Email: officialayaanshaikh@gmail.com
              </span>
            </Typography>
            <Typography variant="body2" className="text-slate-400">
              <span className=" font-outfit">Phone: +91-959-454-8987</span>
            </Typography>
          </Grid>
        </Grid>

        {/* Copyright Section */}
        <div className="mt-8 text-center">
          <Typography variant="body2" className="text-slate-400">
            <span className=" font-outfit">
              &copy; {new Date().getFullYear()} Ayaan Shaikh. All rights
              reserved.
            </span>
          </Typography>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
