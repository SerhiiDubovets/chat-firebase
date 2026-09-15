import { CSSLength } from "@shared/types/css.types";

import { Skeleton } from "../Skeleton";
import { SkeletonProps } from "../skeleton.types";

import { SkeletonText } from "./SkeletonText";

type Props = SkeletonProps & {
  label?: boolean;
  lMargBEnd?: CSSLength;
  lMargBStart?: CSSLength;
  lWidth?: CSSLength;
  lHeight?: CSSLength;
};

export const SkeletonInput = ({
  label = false,
  lMargBEnd = "1rem",
  lMargBStart = "0rem",
  lWidth = "7rem",
  lHeight = "1rem",
  ...props
}: Props) => (
  <>
    {label && (
      <SkeletonText
        width={lWidth}
        height={lHeight}
        marginBEnd={lMargBEnd}
        marginBStart={lMargBStart}
      />
    )}

    <Skeleton height="2.5rem" marginBEnd="1.125rem" {...props} />
  </>
);
