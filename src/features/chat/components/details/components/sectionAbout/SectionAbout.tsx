import { KeyboardEvent, useState } from "react";

import {
  AddressBookIcon,
  InfoIcon,
  PhoneAndroidIcon,
} from "@shared/assets/icons/icons";
import { ExpandableText } from "@shared/ui/expandableText/ExpandableText";
import { Icon } from "@shared/ui/icon/Icon";

import * as S from "./sectionAbout.style";
import { SectionAboutProps } from "./sectionAbout.types";

export const SectionAbout = ({ user }: SectionAboutProps) => {
  const [expanded, setExpanded] = useState(false);

  const placeholder = "Hey there! I'm using GreenChat🌱";
  const placeholderPhone = "No number";

  const about = user?.about?.trim() ? user.about : placeholder;
  const phone = user?.phone?.trim() ? user.phone : placeholderPhone;

  const handleToggle = () => {
    setExpanded((prev) => !prev);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleToggle();
    }
  };

  return (
    <S.SectionWrap>
      <S.ItemWrap>
        <Icon size="lg">
          <PhoneAndroidIcon />
        </Icon>
        <S.Text>{phone}</S.Text>
      </S.ItemWrap>
      <S.ItemWrap>
        <Icon size="lg">
          <AddressBookIcon />
        </Icon>
        <S.Text>{user?.email}</S.Text>
      </S.ItemWrap>
      <S.ItemWrap
        role="button"
        tabIndex={0}
        onClick={handleToggle}
        onKeyDown={handleKeyDown}>
        <Icon size="lg">
          <InfoIcon />
        </Icon>
        <ExpandableText expanded={expanded}>
          <S.Text>{about}</S.Text>
        </ExpandableText>
      </S.ItemWrap>
    </S.SectionWrap>
  );
};
