import { SVGAttributes } from "react";

interface IconProps extends SVGAttributes<SVGSVGElement> {}

const MenuIcon = (props: IconProps) => {
  const { ...rest } = props;

  return (
    <svg
      viewBox="0 0 294 294"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M36.8 86H256.454"
        stroke="black"
        strokeWidth="15.6045"
        strokeLinecap="round"
      />
      <path
        d="M36.8 147.015H256.454"
        stroke="black"
        strokeWidth="15.6045"
        strokeLinecap="round"
      />
      <path
        d="M36.8 208.03H256.454"
        stroke="black"
        strokeWidth="15.6045"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default MenuIcon;
