import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RatingCreateInput = {
  location?: LocationWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
  value?: "Option1" | null;
};
