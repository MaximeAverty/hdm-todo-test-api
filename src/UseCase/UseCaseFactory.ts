import { Injectable } from '@nestjs/common';
import ServiceFactory from '../ServiceFactory';
import DeleteTask from './DeleteTask/DeleteTask';
import GetAllTasksUseCase from './GetAllTasks/GetAllTasksUseCase';
import SaveTaskUseCase from './SaveTask/SaveTaskUseCase';
import CreateTaskUseCase from './CreateTask/CreateTaskUseCase';

type UseCases =
  | GetAllTasksUseCase
  | DeleteTask
  | SaveTaskUseCase
  | CreateTaskUseCase;

@Injectable()
export default class UseCaseFactory extends ServiceFactory<UseCases> {}
