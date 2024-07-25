import { PartialType } from '@nestjs/swagger';
import { CreateSubjcetDto } from './create-subjcet.dto';

export class UpdateSubjcetDto extends PartialType(CreateSubjcetDto) {}
