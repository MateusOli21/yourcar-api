import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'cars' })
@ObjectType()
export class Car {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  dailyPrice: string;

  @Column()
  @Field()
  monthlyPrice: string;

  @Column()
  @Field()
  mileage: string;

  @Column()
  @Field()
  gas: string;

  @Column()
  @Field()
  gearType: string;

  @Column()
  @Field()
  thumbnailUrl: string;
}
