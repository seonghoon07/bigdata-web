import theme from "@/styles/theme.css";

interface BriefcaseProps {
  color: "blue" | "gray";
}

const LocationMarker = ({ color }: BriefcaseProps) => {
  const fillColor = color === "blue" ? theme.blue[500] : theme.gray[400];

  return (
    <svg
      width="27"
      height="27"
      viewBox="0 0 27 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="icon / heroicons / Outline / location-marker">
        <g id="Icon">
          <path
            d="M19.4616 18.5449C18.4191 19.5874 16.2077 21.7988 14.7462 23.2603C13.9652 24.0414 12.7013 24.0412 11.9203 23.2601C10.484 21.8238 8.3168 19.6566 7.2051 18.5449C3.82055 15.1604 3.82055 9.67295 7.2051 6.28841C10.5896 2.90386 16.0771 2.90386 19.4616 6.28841C22.8462 9.67295 22.8462 15.1604 19.4616 18.5449Z"
            stroke={fillColor}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.5834 12.4167C16.5834 14.2116 15.1283 15.6667 13.3334 15.6667C11.5384 15.6667 10.0834 14.2116 10.0834 12.4167C10.0834 10.6217 11.5384 9.16667 13.3334 9.16667C15.1283 9.16667 16.5834 10.6217 16.5834 12.4167Z"
            stroke={fillColor}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
    </svg>
  );
};

export default LocationMarker;
