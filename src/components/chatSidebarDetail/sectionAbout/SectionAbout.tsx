import { FadeText } from "@/components/fadeText/FadeText";
import { useChatStore } from "@/store/chatStore";
import {
  SectionAboutStyle,
  SectionAboutTextStyle,
  SectionAboutTitleStyle,
} from "./sectionAbout.style";

export const SectionAbout = () => {
  const { user } = useChatStore();

  const placeholder = "Hey there! I'm using GreenChat🌱";
  const about = user?.about?.trim() ? user.about : placeholder;

  return (
    <SectionAboutStyle>
      <SectionAboutTitleStyle>About</SectionAboutTitleStyle>
      <FadeText>
        <SectionAboutTextStyle>{about}</SectionAboutTextStyle>
      </FadeText>
    </SectionAboutStyle>
  );
};
