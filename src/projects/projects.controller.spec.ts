import { Test, TestingModule } from '@nestjs/testing';
import { ProjectsController } from './projects.controller';
import { ProjectsService } from './projects.service';
import { PrismaService } from '../prisma.service';

describe('ProjectsController', () => {
  //DEFINIR LAS VARIABLES DONDE SE ALMACENARAN LAS INSTANCIAS
  let controller: ProjectsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProjectsController],
      providers: [ProjectsService, PrismaService],
    }).compile();

    //ACCEDER A LA INSTANCIA DEL CONTROLADOR
    controller = module.get<ProjectsController>(ProjectsController);

    //ACCEDER AL SERVICIO
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
