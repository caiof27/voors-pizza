import { Test, TestingModule } from '@nestjs/testing'
import { PIZZA_SIZE_REPOSITORY } from 'src/infra/orm/sequelize.repositories'
import { PizzaSize } from 'src/infra/orm/entities'
import { PizzaSizeRepository } from 'src/infra/orm/repositories'

describe('PizzaSizeRepository', () => {
  let repository: PizzaSizeRepository
  let mockPizzaSizeModel: typeof PizzaSize

  beforeEach(async () => {
    mockPizzaSizeModel = {
      findAll: jest.fn()
    } as any

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PizzaSizeRepository,
        {
          provide: PIZZA_SIZE_REPOSITORY,
          useValue: mockPizzaSizeModel,
        },
      ],
    }).compile()

    repository = module.get<PizzaSizeRepository>(PizzaSizeRepository)
  })

  it('should be defined', () => {
    expect(repository).toBeDefined()
  })

  describe('findAll', () => {
    it('should return an array of PizzaSizes', async () => {
      const mockPizzaSizes = [{ id: 1, name: 'Margherita' }];
      (mockPizzaSizeModel.findAll as jest.Mock).mockResolvedValue(mockPizzaSizes)

      const result = await repository.findAll()
      expect(result).toEqual(mockPizzaSizes)
    })

    it('should throw an error if findAll fails', async () => {
      (mockPizzaSizeModel.findAll as jest.Mock).mockRejectedValue(new Error())

      await expect(repository.findAll()).rejects.toThrow()
    })
  })
})
