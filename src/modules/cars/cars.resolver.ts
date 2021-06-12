import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

import { INewCarData } from './dtos/INewCarData';
import { CarsService } from './cars.service';
import { Car } from './entities/car.entity';

@Resolver()
export class CarsResolver {
  constructor(private carsService: CarsService) {}

  @Query(() => [Car])
  public async cars(): Promise<Car[]> {
    return await this.carsService.getCars().catch(err => {
      throw err;
    });
  }

  @Mutation(() => Car)
  public async addCar(
    @Args('newCarData') newCarData: INewCarData,
  ): Promise<Car> {
    return await this.carsService.addCar(newCarData).catch(err => {
      throw err;
    });
  }

  @Mutation(() => String)
  public async deleteCar(@Args('carId') carId: string): Promise<string> {
    return await this.carsService.deleteCar(carId).catch(err => {
      throw err;
    });
  }
}
