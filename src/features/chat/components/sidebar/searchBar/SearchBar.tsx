import { CloseIcon, SearchIcon } from "@shared/assets/icons/icons";
import { ButtonIcon } from "@shared/ui/buttons/buttonIcon/ButtonIcon";
import { Icon } from "@shared/ui/icon/Icon";

import * as S from "./searchBar.style";
import { SearchBarProps } from "./SearchBar.types";

export const SearchBar = ({ input, setInput }: SearchBarProps) => {
  const hasValue = input.length > 0;
  return (
    <S.Form>
      <S.InputWrapper>
        <S.Input
          type="text"
          placeholder="Search"
          name="search"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          autoCorrect="off"
        />
        <S.Icon>
          {hasValue ? (
            <ButtonIcon
              size="sm"
              sizeIcon="sm"
              aria-label="clear input"
              onClick={() => setInput("")}>
              <CloseIcon />
            </ButtonIcon>
          ) : (
            <Icon size="sm">
              <SearchIcon />
            </Icon>
          )}
        </S.Icon>
      </S.InputWrapper>
    </S.Form>
  );
};
