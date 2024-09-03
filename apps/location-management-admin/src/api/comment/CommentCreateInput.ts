import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CommentCreateInput = {
  location?: LocationWhereUniqueInput | null;
  text?: string | null;
  user?: UserWhereUniqueInput | null;
};
