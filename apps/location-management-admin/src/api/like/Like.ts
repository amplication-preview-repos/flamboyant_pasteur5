import { Location } from "../location/Location";
import { User } from "../user/User";

export type Like = {
  createdAt: Date;
  id: string;
  location?: Location | null;
  updatedAt: Date;
  user?: User | null;
};
