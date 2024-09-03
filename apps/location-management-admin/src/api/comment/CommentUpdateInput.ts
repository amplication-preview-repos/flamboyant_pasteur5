import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CommentUpdateInput = {
  location?: LocationWhereUniqueInput | null;
  text?: string | null;
  user?: UserWhereUniqueInput | null;
};
