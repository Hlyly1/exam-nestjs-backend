import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SubjcetService } from './subjcet.service';
import { CreateSubjcetDto } from './dto/create-subjcet.dto';
import { UpdateSubjcetDto } from './dto/update-subjcet.dto';

@Controller('/api/subject')
export class SubjcetController {
  constructor(private readonly subjcetService: SubjcetService) {}
  @Get('list')
  findAll() {
    return this.subjcetService.findAll();
  }

  @Post()
  create(@Body() createSubjcetDto: CreateSubjcetDto) {
    return this.subjcetService.create(createSubjcetDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.subjcetService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSubjcetDto: UpdateSubjcetDto) {
    return this.subjcetService.update(+id, updateSubjcetDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subjcetService.remove(+id);
  }
}
