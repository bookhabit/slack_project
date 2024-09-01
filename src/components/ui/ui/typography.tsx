import React, { FC, HTMLAttributes } from "react";

type TypographyProps = {
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  text: string;
  className?: string;
} & HTMLAttributes<HTMLElement>;

const Typography: FC<TypographyProps> = ({ variant }) => {
  return <div>Typography</div>;
};

export default Typography;
