import { Resolver, Query } from '@nestjs/graphql';
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
}
