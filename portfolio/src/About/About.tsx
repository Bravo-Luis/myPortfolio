import "./About.css";
import {
  Typography,
  Card,
  CardContent,
  Grid,
  IconButton,
  Tooltip,
  Collapse,
  Chip,
  Button,
  Popover,
  Box,
} from "@mui/material";
import { useState, useEffect } from "react";
import UcsbCard from "../UcsbCard/ucsbCard";
import ProfileCard from "../ProfileCard/ProfileCard";

import ResumeButton from "../ResumeButton/ResumeBotton";
import SkillGrid from "../SkillGrid/SkillGrid";
import SocialGrid from "../SocialGrid/SocialGrid";
import RelevantCoursework from "../RelevantCoursework/RelevantCoursework";
import ColumnGrid from "../ColumnGrid/ColumnGrid";
function About() {
  const [isBelow1439, setIsBelow1439] = useState<boolean>(
    window.innerWidth < 1439
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1439) {
        if (!isBelow1439) setIsBelow1439(true);
      } else {
        if (isBelow1439) setIsBelow1439(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isBelow1439]);

  const largerScreens = [
    [<ProfileCard />, <ResumeButton />],
    [<UcsbCard />, <SkillGrid />],
    [<SocialGrid />, <RelevantCoursework />],
  ];

  const mediumScreens = [
    [<ProfileCard />, <ResumeButton />, <SocialGrid />],
    [<UcsbCard />, <SkillGrid />, <RelevantCoursework />],
  ];


  return (
    <div className="About">
      {!isBelow1439 && <ColumnGrid columns={largerScreens} />}

      {isBelow1439 && <ColumnGrid columns={mediumScreens} />}
    </div>
  );
}

export default About;
