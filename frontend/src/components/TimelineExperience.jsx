import React from "react";
import Typography from "@mui/material/Typography";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import { FaBriefcase } from "react-icons/fa";

const experienceData = [
  {
    year: "May 2024 - Present",
    position: "Software Developer",
    company: "Prosoft e-solutions India Pvt Ltd.",
    address: "Belgaum, Karnataka",
    description:
      "Contributed to the R&D and development of a WhatsApp chatbot for the state department using Node.js, Express.js, and the WhatsApp Cloud API. Assisted in implementing features like Subscriber Detail Record (SDR) lookup, developed a UI for bot configuration, and played a key role in the bot's successful trial deployment.",
    id: "1",
  },
  {
    year: "Jun 2023 - May 2024",
    position: "Associate Software Engineer",
    company: "CodeArray Technologies Pvt Ltd.",
    address: "Mumbai, Maharashtra",
    description:
      "Developed and maintained features like the order placement workflow using Redux on the EzOrder admin panel, built responsive 'Contact Us' pages, and integrated HTTP API requests. Implemented CRUD operations for improved accessibility and created a role-based login system for the ClinicSoft web panel, ensuring secure access for different user roles.",
    id: "2",
  },
];

const TimelineExperience = () => {
  return (
    <Timeline
      position="right"
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.2,
        },
      }}
    >
      {experienceData.map((exp, index) => (
        <TimelineItem
          key={index}
          sx={{
            minHeight: "100px",
            transition: "background-color 0.3s, transform 0.3s",
            "&:hover": {
              transform: "scale(1.02)",
            },
          }}
        >
          <TimelineOppositeContent color="text.secondary">
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: "#FFFFFF",
                fontSize: { xs: "1rem", sm: "1.25rem" },
              }}
            >
              <span className="font-outfit">{exp.year}</span>
            </Typography>
          </TimelineOppositeContent>

          <TimelineSeparator>
            <TimelineDot
              sx={{
                backgroundColor: "#facc15",
                width: "2.5rem",
                height: "2.5rem",
              }}
            >
              <FaBriefcase color="black" size={"large"} />
            </TimelineDot>
            {index < experienceData.length - 1 && (
              <TimelineConnector
                sx={{ backgroundColor: "#facc15", height: 100 }}
              />
            )}
          </TimelineSeparator>

          <TimelineContent>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                marginBottom: "0.3rem",
                fontSize: { xs: "1rem", sm: "1.25rem" },
              }}
            >
              <span className="font-outfit text-white">{exp.position}</span>
            </Typography>

            <Typography
              variant="body2"
              sx={{
                marginBottom: "0.2rem",
                fontSize: { xs: "0.875rem", sm: "1rem" },
              }}
            >
              <span className="text-slate-400 font-outfit">{exp.address}</span>
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
                fontSize: { xs: "0.875rem", sm: "1rem" },
              }}
            >
              <span className="font-outfit text-yellow-400">{exp.company}</span>
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
                fontSize: { xs: "0.875rem", sm: "1rem" },
              }}
            >
              <span className="font-outfit text-white">{exp.description}</span>
            </Typography>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default TimelineExperience;
