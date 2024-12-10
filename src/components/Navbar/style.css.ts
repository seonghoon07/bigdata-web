import { style } from "@vanilla-extract/css";
import { flex } from "@/styles/flex.css";
import theme from "@/styles/theme.css";
import { font } from "@/styles/font.css";

export const navContainer = style({
  ...flex.CENTER,
  width: "100%",
  height: "78px",
  position: "fixed",
  bottom: "0",
});

export const navBar = style({
  ...flex.FLEX,
  alignItems: "center",
  width: "100%",
  height: "100%",
});

export const itemContainer = style({
  ...flex.COLUMN_CENTER,
  gap: "2px",
  height: "100%",
  flex: "1 0 0",
  backgroundColor: theme.white,
  border: "none",
  color: theme.gray[400],
  ...font.caption,
});

export const active = style({
  color: theme.blue[500],
});
