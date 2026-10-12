import React from "react";
import { Box, Button, Typography, useTheme } from "@mui/material";
import {
  StyledDivider,
  StyledGenericContainer,
  StyledGenericRoot,
  StyledGenericTitle,
  StyledGenericSubText,
} from "./Styles";
import { paper, code, stateValidityPaper, stateValidityCode } from "../../content/links";
export default function ResearchSection() {
  const theme = useTheme();
  return (
    <section id="Research">
      <StyledGenericRoot sx={{ minHeight: "auto", py: 12 }}>
        <StyledGenericContainer>
          <StyledGenericTitle component="h2">
            Research
            <StyledDivider />
          </StyledGenericTitle>
          <StyledGenericSubText component="p">
            Fewer Rebalances, Lower Costs?
          </StyledGenericSubText>
          <Typography
            sx={{
              color: theme.palette.textSecondary.main,
              mt: 1,
              textAlign: "center",
            }}
          >
            Target Dynamics and Portfolio Implementation · Independent working
            paper · October 2026
          </Typography>
          <Box
            sx={{
              mt: 3,
              p: { xs: 2, sm: 4 },
              border:
                "0.25rem solid " +
                theme.palette.backgroundSecondary.main +
                "70",
              borderRadius: "2rem",
              backgroundColor: theme.palette.backgroundSecondary.main + "10",
              maxWidth: 850,
            }}
          >
            <Typography
              sx={{
                color: theme.palette.textMain.main,
                fontSize: "1.15rem",
                mb: 2,
              }}
            >
              Does trading less often actually save much trading cost? In the
              primary historical comparison, 48.5% fewer rebalance events
              produced only 2.7% less traded notional. Moving portfolio targets
              explain much of that gap.
            </Typography>
            <a href="/research">
              <img
                className="research-section-figure"
                src="/research/rebalancing-mechanism.png"
                alt="Paper figure showing event reductions, traded notional, and the importance of target replacement."
              />
            </a>
            <Typography sx={{ color: theme.palette.textMain.main, mt: 2 }}>
              The study compares rebalancing policies with lagged execution,
              modeled transaction costs, and paired block-bootstrap inference.
            </Typography>
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mt: 3 }}>
              <Button
                component="a"
                href="/research"
                variant="contained"
                sx={{ backgroundColor: theme.palette.buttonHover.main }}
              >
                Read the study
              </Button>
              <Button
                component="a"
                href={paper}
                sx={{ color: theme.palette.textMain.main }}
              >
                Download paper ↗
              </Button>
              <Button
                component="a"
                href={code}
                sx={{ color: theme.palette.textMain.main }}
              >
                Code &amp; results ↗
              </Button>
            </Box>
          </Box>
          <Box sx={{ mt: 5, p: { xs: 2, sm: 4 }, border: "0.25rem solid " + theme.palette.backgroundSecondary.main + "70", borderRadius: "2rem", backgroundColor: theme.palette.backgroundSecondary.main + "10", maxWidth: 850 }}>
            <Typography component="h3" sx={{ color: theme.palette.textMain.main, fontSize: "1.6rem", fontWeight: 600 }}>
              When Timely Answers Become Obsolete
            </Typography>
            <Typography sx={{ color: theme.palette.textSecondary.main, mt: 1, mb: 2 }}>
              ML systems · Independent technical report · October 2026
            </Typography>
            <Typography sx={{ color: theme.palette.textMain.main, fontSize: "1.15rem", mb: 2 }}>
              Can an inference scheduler choose answers that stay useful as state changes? A simulation study and separate Apple GPU experiments examine the trade-off between more useful decisions overall and worse service for frequently changing agents.
            </Typography>
            <a href="/research/state-validity">
              <img className="research-section-figure" src="/research/state-validity/group-results.svg" alt="Measured Apple GPU results: aggregate success improves, but higher-change agents receive fewer useful decisions." />
            </a>
            <Typography sx={{ color: theme.palette.textMain.main, mt: 2 }}>
              6,545 simulations and 480 real-model replays. Benefits are conditional; asynchronous controls do not retain the matched-policy gain. Unreviewed technical report.
            </Typography>
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mt: 3 }}>
              <Button component="a" href="/research/state-validity" variant="contained" sx={{ backgroundColor: theme.palette.buttonHover.main }}>Read the inference study</Button>
              <Button component="a" href={stateValidityPaper} sx={{ color: theme.palette.textMain.main }}>Read inference paper ↗</Button>
              <Button component="a" href={stateValidityCode} sx={{ color: theme.palette.textMain.main }}>Inference code &amp; results ↓</Button>
            </Box>
          </Box>
        </StyledGenericContainer>
      </StyledGenericRoot>
    </section>
  );
}
