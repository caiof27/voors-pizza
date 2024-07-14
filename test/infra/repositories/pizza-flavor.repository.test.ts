import { Test, TestingModule } from '@nestjs/testing'
import { PIZZA_FLAVOR_REPOSITORY } from 'src/infra/orm/sequelize.repositories'
import { PizzaFlavor } from 'src/infra/orm/entities'
import { PizzaFlavorRepository } from 'src/infra/orm/repositories'

describe('PizzaFlavorRepository', () => {
  let repository: PizzaFlavorRepository
  let mockPizzaFlavorModel: typeof PizzaFlavor

  beforeEach(async () => {
    mockPizzaFlavorModel = {
      findAll: jest.fn()
    } as any

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PizzaFlavorRepository,
        {
          provide: PIZZA_FLAVOR_REPOSITORY,
          useValue: mockPizzaFlavorModel,
        },
      ],
    }).compile()

    repository = module.get<PizzaFlavorRepository>(PizzaFlavorRepository)
  })

  it('should be defined', () => {
    expect(repository).toBeDefined()
  })

  describe('findAll', () => {
    it('should return an array of PizzaFlavors', async () => {
      const mockPizzaFlavors = [{ id: 1, name: 'Margherita' }];
      (mockPizzaFlavorModel.findAll as jest.Mock).mockResolvedValue(mockPizzaFlavors)

      const result = await repository.findAll()
      expect(result).toEqual(mockPizzaFlavors)
    })

    it('should throw an error if findAll fails', async () => {
      (mockPizzaFlavorModel.findAll as jest.Mock).mockRejectedValue(new Error())

      await expect(repository.findAll()).rejects.toThrow()
    })
  })
})
