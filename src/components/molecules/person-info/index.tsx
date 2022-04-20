import React from "react";

import PersonAcronym from "components/atoms/person-acronym";
import { StyledPersonInfo } from "./person-info.style";
import { Person } from "types";
import Text from "components/atoms/text";
import Flex from "components/atoms/flex";

type Props = {
  person: Person;
  onClickCallback: (person: Person) => void;
  isSelected?: boolean;
};

const PersonInfo = ({
  person,
  onClickCallback,
  isSelected,
}: Props): JSX.Element => (
  <StyledPersonInfo
    onClick={(): void => onClickCallback(person)}
    isSelected={isSelected}
  >
    <Flex gap="m">
      <PersonAcronym name={person.firstNameLastName} />
      <Flex direction="column">
        <Text weight={900} size="l" text={person.firstNameLastName} />
        <Text
          weight={600}
          size="m"
          text={person.jobTitle}
          textTransform="uppercase"
          textColor="red10"
          marginBottom="xl"
        />
        <Text
          weight={400}
          size="m"
          text={person.emailAddress}
          textColor="grey20"
          marginLeft="s"
        />
      </Flex>
    </Flex>
  </StyledPersonInfo>
);

export default PersonInfo;
