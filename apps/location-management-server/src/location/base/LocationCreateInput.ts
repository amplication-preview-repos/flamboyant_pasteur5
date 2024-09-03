/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CommentCreateNestedManyWithoutLocationsInput } from "./CommentCreateNestedManyWithoutLocationsInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
  IsNumber,
  Min,
  Max,
} from "class-validator";
import { Type } from "class-transformer";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { LikeCreateNestedManyWithoutLocationsInput } from "./LikeCreateNestedManyWithoutLocationsInput";
import { LocationImageCreateNestedManyWithoutLocationsInput } from "./LocationImageCreateNestedManyWithoutLocationsInput";
import { RatingCreateNestedManyWithoutLocationsInput } from "./RatingCreateNestedManyWithoutLocationsInput";

@InputType()
class LocationCreateInput {
  @ApiProperty({
    required: false,
    type: () => CommentCreateNestedManyWithoutLocationsInput,
  })
  @ValidateNested()
  @Type(() => CommentCreateNestedManyWithoutLocationsInput)
  @IsOptional()
  @Field(() => CommentCreateNestedManyWithoutLocationsInput, {
    nullable: true,
  })
  comments?: CommentCreateNestedManyWithoutLocationsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  createdBy?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  image?: InputJsonValue;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  latitude?: number | null;

  @ApiProperty({
    required: false,
    type: () => LikeCreateNestedManyWithoutLocationsInput,
  })
  @ValidateNested()
  @Type(() => LikeCreateNestedManyWithoutLocationsInput)
  @IsOptional()
  @Field(() => LikeCreateNestedManyWithoutLocationsInput, {
    nullable: true,
  })
  likes?: LikeCreateNestedManyWithoutLocationsInput;

  @ApiProperty({
    required: false,
    type: () => LocationImageCreateNestedManyWithoutLocationsInput,
  })
  @ValidateNested()
  @Type(() => LocationImageCreateNestedManyWithoutLocationsInput)
  @IsOptional()
  @Field(() => LocationImageCreateNestedManyWithoutLocationsInput, {
    nullable: true,
  })
  locationImages?: LocationImageCreateNestedManyWithoutLocationsInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  longitude?: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => RatingCreateNestedManyWithoutLocationsInput,
  })
  @ValidateNested()
  @Type(() => RatingCreateNestedManyWithoutLocationsInput)
  @IsOptional()
  @Field(() => RatingCreateNestedManyWithoutLocationsInput, {
    nullable: true,
  })
  ratings?: RatingCreateNestedManyWithoutLocationsInput;
}

export { LocationCreateInput as LocationCreateInput };
