import { CommentCreateNestedManyWithoutLocationsInput } from "./CommentCreateNestedManyWithoutLocationsInput";
import { InputJsonValue } from "../../types";
import { LikeCreateNestedManyWithoutLocationsInput } from "./LikeCreateNestedManyWithoutLocationsInput";
import { LocationImageCreateNestedManyWithoutLocationsInput } from "./LocationImageCreateNestedManyWithoutLocationsInput";
import { RatingCreateNestedManyWithoutLocationsInput } from "./RatingCreateNestedManyWithoutLocationsInput";

export type LocationCreateInput = {
  comments?: CommentCreateNestedManyWithoutLocationsInput;
  createdBy?: string | null;
  description?: string | null;
  image?: InputJsonValue;
  latitude?: number | null;
  likes?: LikeCreateNestedManyWithoutLocationsInput;
  locationImages?: LocationImageCreateNestedManyWithoutLocationsInput;
  longitude?: number | null;
  name?: string | null;
  ratings?: RatingCreateNestedManyWithoutLocationsInput;
};
