import { CommentUpdateManyWithoutLocationsInput } from "./CommentUpdateManyWithoutLocationsInput";
import { InputJsonValue } from "../../types";
import { LikeUpdateManyWithoutLocationsInput } from "./LikeUpdateManyWithoutLocationsInput";
import { LocationImageUpdateManyWithoutLocationsInput } from "./LocationImageUpdateManyWithoutLocationsInput";
import { RatingUpdateManyWithoutLocationsInput } from "./RatingUpdateManyWithoutLocationsInput";

export type LocationUpdateInput = {
  comments?: CommentUpdateManyWithoutLocationsInput;
  createdBy?: string | null;
  description?: string | null;
  image?: InputJsonValue;
  latitude?: number | null;
  likes?: LikeUpdateManyWithoutLocationsInput;
  locationImages?: LocationImageUpdateManyWithoutLocationsInput;
  longitude?: number | null;
  name?: string | null;
  ratings?: RatingUpdateManyWithoutLocationsInput;
};
