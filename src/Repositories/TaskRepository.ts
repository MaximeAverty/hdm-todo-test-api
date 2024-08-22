import { Injectable } from '@nestjs/common';
import { PrismaService } from '../PrismaService';
import { Prisma } from '@prisma/client';
import SaveTaskDto from 'src/UseCase/SaveTask/SaveTaskDto';

@Injectable()
export default class TaskRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.task.findMany();
  }

  async findOne(id: number) {
    return this.prisma.task.findUnique({
      where: {
        id,
      },
    });
  }

  async delete(id: number) {
    return this.prisma.task.delete({
      where: {
        id,
      },
    });
  }

  async update(task: SaveTaskDto) {
    return this.prisma.task.update({
      where: {
        id: task.id,
      },
      data: {
        name: task.name,
      },
    });
  }

  async create(name: string) {
    return this.prisma.task.create({
      data: {
        name,
      },
    });
  }

  async save(
    data:
      | Prisma.XOR<Prisma.TaskCreateInput, Prisma.TaskUncheckedCreateInput>
      | Prisma.XOR<Prisma.TaskUpdateInput, Prisma.TaskUncheckedUpdateInput>,
  ) {
    if (!data.id) {
      // @todo IMPLEMENT HERE USING PRISMA API
      return await this.create(data.name as string);
    }
    // @todo IMPLEMENT HERE USING PRISMA API
    const taskToUpdate = await this.findOne(data.id as number);
    if (taskToUpdate.name === data.name) {
      throw new Error('Failed to updated task');
    }
    return this.update(data as SaveTaskDto);
  }
}
