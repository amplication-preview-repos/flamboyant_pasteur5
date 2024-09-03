import { StringFilter } from "../../util/StringFilter";
import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RatingWhereInput = {
  id?: StringFilter;
  location?: LocationWhereUniqueInput;
  user?: UserWhereUniqueInput;
  value?: "Option1";
};
