import { useState } from "react";
import { Fade, FadeTextStyle } from "./fadeText.style";
import { FadeTextProps } from "./fadeText.types";

export const FadeText = ({
  children,
  maxHeight = "3.75rem",
  color = "hsl(220, 1.7%, 64.9%)",
  bgColor = "hsl(230, 9.67741935483871%, 12.156862745098039%)",
}: FadeTextProps) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <FadeTextStyle
      $maxHeight={maxHeight}
      $color={color}
      $expanded={expanded}
      onClick={() => setExpanded(!expanded)}>
      {children}
      <Fade $bgColor={bgColor} $expanded={expanded} />
    </FadeTextStyle>
  );
};
