import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LikeUpdateInput = {
  location?: LocationWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
