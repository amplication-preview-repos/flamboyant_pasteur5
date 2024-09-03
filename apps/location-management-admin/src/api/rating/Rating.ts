import { Location } from "../location/Location";
import { User } from "../user/User";

export type Rating = {
  createdAt: Date;
  id: string;
  location?: Location | null;
  updatedAt: Date;
  user?: User | null;
  value?: "Option1" | null;
};
