/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { GraphQLUpload } from "graphql-upload";
import { FileUpload } from "src/storage/base/storage.types";
import { Location } from "./Location";
import { LocationCountArgs } from "./LocationCountArgs";
import { LocationFindManyArgs } from "./LocationFindManyArgs";
import { LocationFindUniqueArgs } from "./LocationFindUniqueArgs";
import { CreateLocationArgs } from "./CreateLocationArgs";
import { UpdateLocationArgs } from "./UpdateLocationArgs";
import { DeleteLocationArgs } from "./DeleteLocationArgs";
import { CommentFindManyArgs } from "../../comment/base/CommentFindManyArgs";
import { Comment } from "../../comment/base/Comment";
import { LikeFindManyArgs } from "../../like/base/LikeFindManyArgs";
import { Like } from "../../like/base/Like";
import { LocationImageFindManyArgs } from "../../locationImage/base/LocationImageFindManyArgs";
import { LocationImage } from "../../locationImage/base/LocationImage";
import { RatingFindManyArgs } from "../../rating/base/RatingFindManyArgs";
import { Rating } from "../../rating/base/Rating";
import { LocationService } from "../location.service";
@graphql.Resolver(() => Location)
export class LocationResolverBase {
  constructor(protected readonly service: LocationService) {}

  async _locationsMeta(
    @graphql.Args() args: LocationCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Location])
  async locations(
    @graphql.Args() args: LocationFindManyArgs
  ): Promise<Location[]> {
    return this.service.locations(args);
  }

  @graphql.Query(() => Location, { nullable: true })
  async location(
    @graphql.Args() args: LocationFindUniqueArgs
  ): Promise<Location | null> {
    const result = await this.service.location(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Location)
  async createLocation(
    @graphql.Args() args: CreateLocationArgs
  ): Promise<Location> {
    return await this.service.createLocation({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Location)
  async updateLocation(
    @graphql.Args() args: UpdateLocationArgs
  ): Promise<Location | null> {
    try {
      return await this.service.updateLocation({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Location)
  async deleteLocation(
    @graphql.Args() args: DeleteLocationArgs
  ): Promise<Location | null> {
    try {
      return await this.service.deleteLocation(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Location)
  async uploadImage(
    @graphql.Args({
      name: "file",
      type: () => GraphQLUpload,
    })
    file: FileUpload,
    @graphql.Args()
    args: LocationFindUniqueArgs
  ): Promise<Location> {
    return await this.service.uploadImage(args, file);
  }

  @graphql.Mutation(() => Location)
  async deleteImage(
    @graphql.Args()
    args: LocationFindUniqueArgs
  ): Promise<Location> {
    return await this.service.deleteImage(args);
  }

  @graphql.ResolveField(() => [Comment], { name: "comments" })
  async findComments(
    @graphql.Parent() parent: Location,
    @graphql.Args() args: CommentFindManyArgs
  ): Promise<Comment[]> {
    const results = await this.service.findComments(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [Like], { name: "likes" })
  async findLikes(
    @graphql.Parent() parent: Location,
    @graphql.Args() args: LikeFindManyArgs
  ): Promise<Like[]> {
    const results = await this.service.findLikes(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [LocationImage], { name: "locationImages" })
  async findLocationImages(
    @graphql.Parent() parent: Location,
    @graphql.Args() args: LocationImageFindManyArgs
  ): Promise<LocationImage[]> {
    const results = await this.service.findLocationImages(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [Rating], { name: "ratings" })
  async findRatings(
    @graphql.Parent() parent: Location,
    @graphql.Args() args: RatingFindManyArgs
  ): Promise<Rating[]> {
    const results = await this.service.findRatings(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}