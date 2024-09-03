import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { LikeListRelationFilter } from "../like/LikeListRelationFilter";
import { LocationImageListRelationFilter } from "../locationImage/LocationImageListRelationFilter";
import { RatingListRelationFilter } from "../rating/RatingListRelationFilter";

export type LocationWhereInput = {
  comments?: CommentListRelationFilter;
  createdBy?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  image?: JsonFilter;
  latitude?: FloatNullableFilter;
  likes?: LikeListRelationFilter;
  locationImages?: LocationImageListRelationFilter;
  longitude?: FloatNullableFilter;
  name?: StringNullableFilter;
  ratings?: RatingListRelationFilter;
};
