import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Car } from './entities/car.entity';
import { INewCarData } from './dtos/INewCarData';

@Injectable()
export class CarsService {
  constructor(@InjectRepository(Car) private carRespository: Repository<Car>) {}

  public async getCars(): Promise<Car[]> {
    try {
      const cars = await this.carRespository.find({});

      return cars;
    } catch (err) {
      throw new Error(err);
    }
  }

  public async addCar(newCarData: INewCarData): Promise<Car> {
    try {
      const newCar = this.carRespository.create(newCarData);
      await this.carRespository.save(newCar);

      return newCar;
    } catch (err) {
      throw new Error(err);
    }
  }

  public async deleteCar(carId: string): Promise<string> {
    try {
      const findedCar = await this.carRespository.findOne({
        where: { id: carId },
      });

      await this.carRespository.remove(findedCar);

      return 'deleted successfully deleted.';
    } catch (err) {
      throw new Error(err);
    }
  }
}
