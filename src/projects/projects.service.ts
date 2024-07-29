import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { PrismaService } from 'src/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ProjectsService {
  // Pasar una instancia de la conexión a la bd: database
  constructor(private database: PrismaService) {}

  // Modificar create() para registrar un proyecto
  async create(createProjectDto: CreateProjectDto) {
    try {
      const newProject = await this.database.project.create({
        data: createProjectDto,
      });
      return {
        message: 'Proyecto creado exitosamente',
        project: newProject,
      };
    } catch (error) {
      // Manejo de errores en caso de que ocurra algo al crear un proyecto
      throw new Error(`Error al crear el proyecto: ${error.message}`);
    }
  }

  // Obtener todos los proyectos
  async findAll() {
    try {
      const projects = await this.database.project.findMany();
      return {
        message: 'Proyectos recuperados exitosamente',
        projects: projects,
      };
    } catch (error) {
      throw new Error(`Error al recuperar proyectos: ${error.message}`);
    }
  }

  // Obtener un proyecto por ID
  async findOne(id: number) {
    try {
      const project = await this.database.project.findUnique({
        where: { id },
      });

      if (!project) {
        return {
          message: `Proyecto con ID ${id} no encontrado`,
        };
      }

      return {
        message: 'Proyecto recuperado exitosamente',
        project: project,
      };
    } catch (error) {
      throw new Error(`Error al recuperar el proyecto: ${error.message}`);
    }
  }

  // Actualizar un proyecto por ID
  async update(id: number, updateProjectDto: UpdateProjectDto) {
    try {
      const updatedProject = await this.database.project.update({
        where: { id },
        data: updateProjectDto,
      });

      return {
        message: 'Proyecto actualizado exitosamente',
        project: updatedProject,
      };
    } catch (error) {
      throw new Error(`Error al actualizar el proyecto: ${error.message}`);
    }
  }

  // Eliminar un proyecto por ID
  async remove(id: number) {
    try {
      const deletedProject = await this.database.project.delete({
        where: { id },
      });

      return {
        message: 'Proyecto eliminado exitosamente',
        project: deletedProject,
      };
    } catch (error) {
      throw new Error(`Error al eliminar el proyecto: ${error.message}`);
    }
  }
}
