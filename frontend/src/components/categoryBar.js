import React from "react";
import { emphasize, withStyles } from "@material-ui/core/styles";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Chip from "@material-ui/core/Chip";
import HomeIcon from "@material-ui/icons/Home";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import Box from "@material-ui/core/Box";
const StyledBreadcrumb = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.info.light,
    display: "flex",
    justifyContent: "center",
    height: theme.spacing(3),
    color: theme.palette.grey[800],
    fontWeight: theme.typography.fontWeightBold,
    "&:hover, &:focus": {
      backgroundColor: theme.palette.grey[300],
    },
    "&:active": {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(theme.palette.grey[300], 0.12),
    },
  },
}))(Chip); // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function CategoryBar() {
  return (
    <Box display="flex" justifyContent="center">
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        <StyledBreadcrumb
          component="a"
          href="#"
          label="Formal Foot-wear"
          icon={<HomeIcon fontSize="small" />}
          onClick={handleClick}
        />
        <StyledBreadcrumb
          component="a"
          href="#"
          label="Traditional"
          onClick={handleClick}
        />
        <StyledBreadcrumb
          component="a"
          href="#"
          label="Women's Choice"
          onClick={handleClick}
        />
        <StyledBreadcrumb
          component="a"
          href="#"
          label="Men's Pick"
          onClick={handleClick}
        />
      </Breadcrumbs>
    </Box>
  );
}
