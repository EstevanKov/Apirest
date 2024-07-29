import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Task, TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) {}

    @Get()
    findAll(): Task[] {
        return this.tasksService.findAll();
    }

    // POST
    @Post()
    createTask(@Body() newTask: CreateTaskDto): Task {
        return this.tasksService.createTask(newTask as unknown as Task);
    }

    // PUT
    @Put(':id')
    updateTask(@Param('id') id: string, @Body() taskData: UpdateTaskDto): string {
        const result = this.tasksService.updateTask(parseInt(id), taskData);
        return result;
    }
    //DELETE
    @Delete(':id')
    deleteTask(@Param('id') id: string): string {
        return this.tasksService.deleteTask(parseInt(id));
    }
    //SHOW
    @Get(':id')
    getTask(@Param('id') id: string) : Task{
        return this.tasksService.getTask(parseInt(id));
    }
}
