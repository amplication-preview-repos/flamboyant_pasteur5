import { Comment } from "../comment/Comment";
import { Like } from "../like/Like";
import { Rating } from "../rating/Rating";
import { JsonValue } from "type-fest";

export type User = {
  comments?: Array<Comment>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  likes?: Array<Like>;
  ratings?: Array<Rating>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
