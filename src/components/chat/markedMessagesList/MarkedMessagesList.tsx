import { Icon } from "@/components/icon/Icon";
import { LazyImage } from "@/components/lazyImage/LazyImage";
import timeAgo from "@/helpers/timeMessages";
import { DeleteIcon } from "@/icons/icons";
import { TimeMessageStyle } from "@/styles/sharedStyles";
import {
  MarkedMessageBlockStyle,
  MarkedMessageDeleteIconStyle,
  MarkedMessageStyle,
} from "./markedMessagesList.style";
import { MarkedMessagesListProps } from "./markedMessagesListProps.types";

export const MarkedMessagesList = ({
  messages,
  onHandleUnMark,
}: MarkedMessagesListProps) => {
  return messages?.map(({ id, createdAt, img, text }) => (
    <MarkedMessageStyle key={createdAt.toString()}>
      <MarkedMessageDeleteIconStyle onClick={() => onHandleUnMark(id)}>
        <Icon color="white" size="1.25rem">
          <DeleteIcon />
        </Icon>
      </MarkedMessageDeleteIconStyle>

      <MarkedMessageBlockStyle>
        {img && <LazyImage width={200} height={200} src={img} alt="Image" />}
        {text !== "" && <p>{text}</p>}
      </MarkedMessageBlockStyle>
      <TimeMessageStyle>{timeAgo(createdAt.toMillis())}</TimeMessageStyle>
    </MarkedMessageStyle>
  ));
};
