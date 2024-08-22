import { IsNotEmpty } from 'class-validator';

export default class SaveTaskDto {
  id: null | number;

  @IsNotEmpty()
  name: string;
}
