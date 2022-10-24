import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./Accordon.scss";

export default function SimpleAccordion() {
  return (
    <div className="men_foto">
      <h2 style={{ marginLeft: "140px", paddingTop: "20px" }}>FAQ</h2>
      <div className="accordion1">
        <div className="accordion__left">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Do you go in for sports?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{ color: "rgb(112, 122, 138)" }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
                inventore maxime reprehenderit sapiente sit, soluta! Explicabo
                laudantium minima nihil obcaecati pariatur, porro quaerat
                repellendus sit unde. Animi nesciunt nobis suscipit!
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>What sports do you like?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{ color: "rgb(112, 122, 138)" }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
                inventore maxime reprehenderit sapiente sit, soluta! Explicabo
                laudantium minima nihil obcaecati pariatur, porro quaerat
                repellendus sit unde. Animi nesciunt nobis suscipit!
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="accordion__right">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>How often do you do a morning exercise?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{ color: "rgb(112, 122, 138)" }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
                inventore maxime reprehenderit sapiente sit, soluta! Explicabo
                laudantium minima nihil obcaecati pariatur, porro quaerat
                repellendus sit unde. Animi nesciunt nobis suscipit!
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Can you name a few exotic sports?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{ color: "rgb(112, 122, 138)" }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
                inventore maxime reprehenderit sapiente sit, soluta! Explicabo
                laudantium minima nihil obcaecati pariatur, porro quaerat
                repellendus sit unde. Animi nesciunt nobis suscipit!
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
