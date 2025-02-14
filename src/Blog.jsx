import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import AppTheme from "./theme/AppTheme";

import { BlogNavigation } from "./components/BlogNavigation/BlogNavigation";
import { MainContent } from "./components/MainContent";

export const Blog = (props) => {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />

      <BlogNavigation />

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
