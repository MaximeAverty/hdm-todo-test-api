import { BadRequestException, Injectable } from '@nestjs/common';
import { UseCase } from '../../index';
import TaskRepository from 'src/Repositories/TaskRepository';
import SaveTaskDto from '../SaveTask/SaveTaskDto';

@Injectable()
export default class CreateTaskUseCase
  implements UseCase<Promise<boolean>, [dto: SaveTaskDto]>
{
  constructor(private readonly taskRepository: TaskRepository) {}

  async handle(dto: SaveTaskDto) {
    try {
      await this.taskRepository.create(dto.name);
      return true;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
