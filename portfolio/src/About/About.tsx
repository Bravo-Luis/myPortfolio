import "./About.css";

import { useState, useEffect } from "react";
import UcsbCard from "../UcsbCard/UcsbCard";
import ProfileCard from "../ProfileCard/ProfileCard";

import ResumeButton from "../ResumeButton/ResumeBotton";
import SkillGrid from "../SkillGrid/SkillGrid";
import SocialGrid from "../SocialGrid/SocialGrid";
import ColumnGrid from "../ColumnGrid/ColumnGrid";
import Slides from "../Slides/Slides";

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
    [<ProfileCard />, <Slides />],
    [<UcsbCard />, <SkillGrid />],
    [<ColumnGrid  columns={[[<ResumeButton/>, <SocialGrid />]]} />],
  ];

  const mediumScreens = [
    [<ProfileCard />, <Slides/>, <ResumeButton />],
    [<SocialGrid />,<UcsbCard />, <SkillGrid />],
  ];

  return (
    <div className="About">
      {!isBelow1439 && <ColumnGrid columns={largerScreens} />}
      {isBelow1439 && <ColumnGrid columns={mediumScreens} />}
    </div>
  );
}

export default About;
