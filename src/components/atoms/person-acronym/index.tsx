import React, { useMemo } from "react";
import { StyledPersonAcronym } from "./person-acronym.style";

type Props = {
  name: string;
};

function PersonAcronym({ name }: Props): JSX.Element {
  const acronym = useMemo<string>((): string => {
    const splittedName = name.split(" ");

    return `${splittedName[0][0] || ""}${splittedName[1][0] || ""}`;
  }, [name]);
  return <StyledPersonAcronym>{acronym}</StyledPersonAcronym>;
}

export default PersonAcronym;
