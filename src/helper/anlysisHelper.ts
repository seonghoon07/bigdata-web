import theme from "@/styles/theme.css";

export const getCongestionStatus = (useStf: number): string => {
  if (useStf < 500) return "매우 원활";
  if (useStf < 800) return "원활";
  if (useStf < 1200) return "보통";
  if (useStf < 1500) return "혼잡";
  if (useStf >= 1500) return "매우 혼잡";
  return "데이터 오류";
};

export const getCircleColor = (useStf: number): string => {
  if (useStf < 500) return theme.usageBlue as string;
  if (useStf < 800) return theme.usageSkyblue as string;
  if (useStf < 1200) return theme.usageGreen as string;
  if (useStf < 1500) return theme.usageYellow as string;
  if (useStf >= 1500) return theme.usageRed as string;
  return theme.usageBlue as string;
};
