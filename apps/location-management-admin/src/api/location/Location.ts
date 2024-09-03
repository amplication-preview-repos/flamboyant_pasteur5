import { Comment } from "../comment/Comment";
import { JsonValue } from "type-fest";
import { Like } from "../like/Like";
import { LocationImage } from "../locationImage/LocationImage";
import { Rating } from "../rating/Rating";

export type Location = {
  comments?: Array<Comment>;
  createdAt: Date;
  createdBy: string | null;
  description: string | null;
  id: string;
  image: JsonValue;
  latitude: number | null;
  likes?: Array<Like>;
  locationImages?: Array<LocationImage>;
  longitude: number | null;
  name: string | null;
  ratings?: Array<Rating>;
  updatedAt: Date;
};
