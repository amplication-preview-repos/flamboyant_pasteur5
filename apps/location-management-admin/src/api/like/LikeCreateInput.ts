import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LikeCreateInput = {
  location?: LocationWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
