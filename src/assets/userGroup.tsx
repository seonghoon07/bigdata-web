import theme from "@/styles/theme.css";

interface BriefcaseProps {
  color: "blue" | "gray";
}

const UserGroup = ({color}: BriefcaseProps) => {
  const fillColor = color === "blue" ? theme.blue[500] : theme.gray[400];

  return (
    <svg
      width="26"
      height="27"
      viewBox="0 0 26 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="icon / heroicons / Outline / user-group">
        <path
          id="Icon"
          d="M18.4167 22.1666H23.8333V20C23.8333 18.2051 22.3782 16.75 20.5833 16.75C19.5481 16.75 18.6259 17.234 18.0307 17.9881M18.4167 22.1666H7.58332M18.4167 22.1666V20C18.4167 19.2891 18.2797 18.6101 18.0307 17.9881M7.58332 22.1666H2.16666V20C2.16666 18.2051 3.62173 16.75 5.41666 16.75C6.4519 16.75 7.37409 17.234 7.96926 17.9881M7.58332 22.1666V20C7.58332 19.2891 7.72028 18.6101 7.96926 17.9881M7.96926 17.9881C8.76795 15.9928 10.7194 14.5833 13 14.5833C15.2806 14.5833 17.232 15.9928 18.0307 17.9881M16.25 8.08331C16.25 9.87824 14.7949 11.3333 13 11.3333C11.2051 11.3333 9.74999 9.87824 9.74999 8.08331C9.74999 6.28839 11.2051 4.83331 13 4.83331C14.7949 4.83331 16.25 6.28839 16.25 8.08331ZM22.75 11.3333C22.75 12.5299 21.7799 13.5 20.5833 13.5C19.3867 13.5 18.4167 12.5299 18.4167 11.3333C18.4167 10.1367 19.3867 9.16665 20.5833 9.16665C21.7799 9.16665 22.75 10.1367 22.75 11.3333ZM7.58332 11.3333C7.58332 12.5299 6.61327 13.5 5.41666 13.5C4.22004 13.5 3.24999 12.5299 3.24999 11.3333C3.24999 10.1367 4.22004 9.16665 5.41666 9.16665C6.61327 9.16665 7.58332 10.1367 7.58332 11.3333Z"
          stroke={fillColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default UserGroup;