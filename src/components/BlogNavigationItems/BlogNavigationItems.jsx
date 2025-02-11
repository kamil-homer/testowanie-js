import { Button, MenuItem } from "@mui/material";

export const MENU_TYPE = {
  MOBILE: "mobile",
  DESKTOP: "desktop",
};

export const MENU_ITEMS = [
  {
    id: "features",
    label: "Features",
  },
  {
    id: "testimonials",
    label: "Testimonials",
  },
  {
    id: "highlights",
    label: "Highlights",
  },
  {
    id: "pricing",
    label: "Pricing",
  },
  {
    id: "faq",
    label: "FAQ",
  },
  {
    id: "blog",
    label: "Blog",
  },
];

export const BlogNavigationItems = ({ menuType = MENU_TYPE.DESKTOP }) => {
  switch (menuType) {
    case MENU_TYPE.MOBILE:
      return (
        <>
          {MENU_ITEMS.map((item) => (
            <MenuItem key={item.id}>{item.label}</MenuItem>
          ))}
        </>
      );
    default:
    case MENU_TYPE.DESKTOP:
      return (
        <>
          {MENU_ITEMS.map((item) => (
            <Button key={item.id} variant="text" color="info" size="small">
              {item.label}
            </Button>
          ))}
        </>
      );
  }
};
