import { Injectable } from '@nestjs/common';
import { UpdateTaskDto } from './dto/update-task.dto';

export type Task = {
    id: number,
    date: Date,
    description: String,
    completed: boolean,
}

@Injectable()
export class TasksService {
    private tasks : Task[] = [
        {
            id:1,
            date: new Date(),
            description: 'Crear Proyecto',
            completed: false
        },
        {
            id:2,
            date: new Date(),
            description: 'Agregar módulo Tasks',
            completed: false
        },
        {
            id:3,
            date: new Date(),
            description: 'Agregar controlador y servicio a módulo Tasks',
            completed: false
        }
    ]
    findAll(): Task[]{
        return this.tasks;
    }
    /**
     * Crear tarea
     * @param task
     * @return tarea creada
    */
   createTask(task:Task): Task {
    const taskData = {
        id: this.tasks.length + 1,
        ...task
    }
    this.tasks.push(taskData);
    return taskData;
   }

   updateTask(id: number, updateTaskDto: UpdateTaskDto): string {
    const taskToUpdate = this.tasks.find(task => task.id === id);
    if (!taskToUpdate) {
        return "No se encuentra la Task"; 
    }
    if (updateTaskDto.description !== undefined) {
        taskToUpdate.description = updateTaskDto.description;
    }
    if (updateTaskDto.date !== undefined) {
        taskToUpdate.date = updateTaskDto.date;
    }
    return "ok"; 
}

deleteTask(id: number): string {
    const initialLength = this.tasks.length;
    this.tasks = this.tasks.filter(task => task.id !== id);
    if (this.tasks.length < initialLength) {
        return "Tarea eliminada";
    } else {
        return "No se encontró la tarea para eliminar";
    }
}
    getTask(id: number): Task{
        return this.tasks.find((item) => item.id == id);
    }
}
