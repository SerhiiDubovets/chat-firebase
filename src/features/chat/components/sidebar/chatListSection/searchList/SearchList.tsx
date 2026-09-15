import { SearchItem } from "@features/chat/components/sidebar/searchItem/SearchItem";

import { SearchListProps } from "./searchList.types";

export const SearchList = ({ users }: SearchListProps) => (
  <ul>
    {users.map((user) => (
      <SearchItem key={user.id} user={user} />
    ))}
  </ul>
);
