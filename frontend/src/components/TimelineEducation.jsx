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
import { BsMortarboardFill } from "react-icons/bs";
import { FaBookOpen } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";

const educationData = [
  {
    year: "2023",
    qualification: "Bachelor of Engineering in Computer Engineering",
    institution: "Rizvi College Of Engineering",
    address: "Bandra, Mumbai",
    id: "1",
  },
  {
    year: "2019",
    qualification: "Higher Secondary Certificate",
    institution: "Anand Vishwa Gurukul Jr. College",
    address: "Thane, Mumbai",
    id: "2",
  },
  {
    year: "2017",
    qualification: "Secondary School Certificate",
    institution: "India International School",
    address: "Sharjah, UAE",
    id: "3",
  },
];

const TimelineEducation = () => {
  return (
    <Timeline
      position="right"
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.2,
        },
      }}
    >
      {educationData.map((edu, index) => (
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
              <span className="font-outfit">{edu.year}</span>
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
              {edu.id == "1" ? (
                <BsMortarboardFill color="black" size={"large"} className="" />
              ) : edu.id == "2" ? (
                <FaBookOpen color="black" size={"large"} className="" />
              ) : (
                <FaPencil color="black" size={"large"} className="" />
              )}
            </TimelineDot>
            {index < educationData.length - 1 && (
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
              <span className="font-outfit text-white">
                {edu.qualification}
              </span>
            </Typography>

            <Typography
              variant="body2"
              sx={{
                marginBottom: "0.2rem",
                fontSize: { xs: "0.875rem", sm: "1rem" },
              }}
            >
              <span className="text-slate-400 font-outfit">{edu.address}</span>
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
                fontSize: { xs: "0.875rem", sm: "1rem" },
              }}
            >
              <span className="font-outfit text-yellow-400">
                {edu.institution}
              </span>
            </Typography>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default TimelineEducation;
