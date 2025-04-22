import { SVGAttributes } from "react";

interface IconProps extends SVGAttributes<SVGSVGElement> {}

const MagnifierIcon = (props: IconProps) => {
  const { ...rest } = props;

  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M26.8476 50.4444C39.9498 50.4444 50.5713 39.8229 50.5713 26.7206C50.5713 13.6183 39.9498 2.99683 26.8476 2.99683C13.7453 2.99683 3.12378 13.6183 3.12378 26.7206C3.12378 39.8229 13.7453 50.4444 26.8476 50.4444Z"
        stroke="white"
        strokeWidth="5.93094"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M56.5021 56.3751L43.6023 43.4753"
        stroke="white"
        strokeWidth="5.93094"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default MagnifierIcon;
