import React from "react";
import { emphasize, withStyles } from "@material-ui/core/styles";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Chip from "@material-ui/core/Chip";
import HomeIcon from "@material-ui/icons/Home";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import Box from "@material-ui/core/Box";
import { useHistory } from "react-router-dom";
const StyledBreadcrumb = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.dark,
    display: "flex",
    justifyContent: "center",
    height: theme.spacing(3),
    color: theme.palette.primary.contrastText,
    fontWeight: theme.typography.fontWeightBold,
    "&:hover, &:focus": {
      backgroundColor: theme.palette.primary.light,
    },
    "&:active": {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(theme.palette.grey[300], 0.12),
    },
  },
}))(Chip); // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591

export default function CategoryBar({ categories }) {
  const history = useHistory();
  return (
    <Box
      display="flex"
      marginTop="75px"
      marginBottom="8px"
      justifyContent="center"
    >
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {categories.map((category) => (
          <StyledBreadcrumb
            key={category.id}
            component="a"
            href="#"
            label={category.name}
            onClick={() => {
              history.push({
                pathname: "/categories",
                state: { category },
              });
            }}
          />
        ))}
      </Breadcrumbs>
    </Box>
  );
}
