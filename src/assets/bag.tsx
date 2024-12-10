import theme from "@/styles/theme.css";

interface BriefcaseProps {
  color: "blue" | "gray";
}

const Briefcase = ({ color }: BriefcaseProps) => {
  const fillColor = color === "blue" ? theme.blue[500] : theme.gray[400];

  return (
    <svg
      width="27"
      height="27"
      viewBox="0 0 27 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="icon / heroicons / Outline / briefcase">
        <path
          id="Icon"
          d="M23.4167 14.8601C20.4058 16.0789 17.1146 16.75 13.6667 16.75C10.2188 16.75 6.92759 16.0789 3.91669 14.8601M18 7.00002V4.83335C18 3.63674 17.03 2.66669 15.8334 2.66669H11.5C10.3034 2.66669 9.33335 3.63674 9.33335 4.83335V7.00002M13.6667 13.5H13.6775M6.08335 22.1667H21.25C22.4466 22.1667 23.4167 21.1966 23.4167 20V9.16669C23.4167 7.97007 22.4466 7.00002 21.25 7.00002H6.08335C4.88674 7.00002 3.91669 7.97007 3.91669 9.16669V20C3.91669 21.1966 4.88674 22.1667 6.08335 22.1667Z"
          stroke={fillColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default Briefcase;
