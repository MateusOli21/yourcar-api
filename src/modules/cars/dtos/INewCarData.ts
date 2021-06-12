import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class INewCarData {
  @Field()
  name: string;

  @Field()
  dailyPrice: string;

  @Field()
  monthlyPrice: string;

  @Field()
  mileage: string;

  @Field()
  gas: string;

  @Field()
  gearType: string;

  @Field()
  thumbnailUrl: string;
}
