import { Test, TestingModule } from '@nestjs/testing';
import { MainModule } from "src/main/controllers/main.module";
import * as supertest from 'supertest';
import { INestApplication } from "@nestjs/common";
import { createOrderMock } from 'test/domain/mocks';

describe('Main Controller', ()=>{
    let app: INestApplication
    beforeAll(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [MainModule],
        }).compile()

        app = module.createNestApplication();
        await app.init()
    });

    afterAll(async () => {
        await app.close();
    });

    describe('GET /flavor', ()=>{
        test('Should return 200', async ()=>{
            await supertest(app.getHttpServer()).get('/flavor').expect(200)
        })
    })

    describe('GET /size', ()=>{
        test('Should return 200', async ()=>{
            await supertest(app.getHttpServer()).get('/size').expect(200)
        })
    })

    describe('GET /personalization', ()=>{
        test('Should return 200', async ()=>{
            await supertest(app.getHttpServer()).get('/personalization').expect(200)
        })
    })

    describe('GET /order', ()=>{
        test('Should return 200', async ()=>{
            await supertest(app.getHttpServer()).get('/order/1').expect(200)
        })
    })

    describe('POST /order', ()=>{
        test('Should return 200', async ()=>{
            await supertest(app.getHttpServer()).post('/order').send(createOrderMock()).expect(204)
        })
    })
})