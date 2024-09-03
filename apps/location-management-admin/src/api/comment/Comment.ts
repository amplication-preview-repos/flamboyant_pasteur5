import { Location } from "../location/Location";
import { User } from "../user/User";

export type Comment = {
  createdAt: Date;
  id: string;
  location?: Location | null;
  text: string | null;
  updatedAt: Date;
  user?: User | null;
};
