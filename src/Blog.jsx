import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import AppTheme from "./theme/AppTheme";

import { Navigation } from "./components/Navigation";
import { MainContent } from "./components/MainContent";

export const Blog = (props) => {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />

      <Navigation />

      <Container
        maxWidth="lg"
        component="main"
        sx={{ display: "flex", flexDirection: "column", my: 16, gap: 4 }}
      >
        <MainContent />
      </Container>
    </AppTheme>
  );
};
