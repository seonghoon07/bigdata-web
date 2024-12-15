import { style } from '@vanilla-extract/css';
import { flex } from "@/styles/flex.css";
import { font } from "@/styles/font.css";
import theme from "@/styles/theme.css";

export const container = style({
  width: '100%',
  height: '100%',
  padding: '80px 20px',
  ...flex.COLUMN_FLEX,
  gap: "40px",
});

export const filterWrapper = style({
  ...flex.FLEX,
  gap: "16px",
})

export const filterContainer = style({
  ...flex.FLEX,
  alignItems: "center",
  gap: "4px",
})

export const filterText = style({
  ...font.H3,
  color: theme.black,
})

export const subwayListWrapper = style({
  ...flex.COLUMN_FLEX,
  gap: "8px"
})

export const lineContainer = style({
  ...flex.COLUMN_FLEX,
  gap: "4px",
})

export const line = style({
  color: theme.blue[500],
  ...font.P2,
})

export const directionWrapper = style({
  ...flex.COLUMN_FLEX,
  padding: "8px 12px",
  gap: "8px",
  width: "100%",
})

export const directionContainer = style({
  ...flex.BETWEEN,
  width: "100%",
})

export const direction = style({
  color: theme.black,
  ...font.P1,
})

export const stateWrapper = style({
  ...flex.FLEX,
  alignItems: "center",
  gap: "4px",
})

export const state = style({
  color: theme.black,
  ...font.P3,
})

export const stateCircle = style({
  width: "12px",
  height: "12px",
  backgroundColor: theme.usageBlue,
  borderRadius: "100%",
})
