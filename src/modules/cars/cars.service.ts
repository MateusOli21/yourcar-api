import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Car } from './entities/car.entity';

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
}
