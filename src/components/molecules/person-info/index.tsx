import React from "react";

import PersonAcronym from "components/atoms/person-acronym";
import { StyledPersonInfo } from "./person-info.style";
import { Person } from "types";
import Text from "components/atoms/text";
import FlexDiv from "components/atoms/flex-div";

type Props = {
  data: Person;
};

const PersonInfo = ({ data }: Props): JSX.Element => (
  <StyledPersonInfo>
    <FlexDiv gap="m">
      <PersonAcronym name={data.firstNameLastName} />
      <FlexDiv direction="column">
        <Text weight={900} size="l" text={data.firstNameLastName} />
        <Text
          weight={600}
          size="m"
          text={data.jobTitle}
          textTransform="uppercase"
          textColor="red10"
          marginBottom="xl"
        />
        <Text
          weight={400}
          size="m"
          text={data.emailAddress}
          textColor="grey20"
          marginLeft="s"
        />
      </FlexDiv>
    </FlexDiv>
  </StyledPersonInfo>
);

export default PersonInfo;
