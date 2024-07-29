import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    //ENSAMBLAR un modulo de pruebas
    //agregar las dependencias necesarias
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    //extraer o tomar la instancia del controlador
    appController = app.get<AppController>(AppController);
  });

  describe('Verificar que el root devuelve el mensaje correcto', () => {
    //caso de pruebas
    it('should return "Hello World!"', () => {
      //evaluar la respuesta
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
