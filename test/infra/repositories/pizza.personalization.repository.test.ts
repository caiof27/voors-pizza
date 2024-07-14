import { Test, TestingModule } from '@nestjs/testing'
import { PIZZA_PERSONALIZATION_REPOSITORY } from 'src/infra/orm/sequelize.repositories'
import { PizzaPersonalization } from 'src/infra/orm/entities'
import { PizzaPersonalizationRepository } from 'src/infra/orm/repositories'

describe('PizzaPersonalizationRepository', () => {
  let repository: PizzaPersonalizationRepository
  let mockPizzaPersonalizationModel: typeof PizzaPersonalization

  beforeEach(async () => {
    mockPizzaPersonalizationModel = {
      findAll: jest.fn()
    } as any

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PizzaPersonalizationRepository,
        {
          provide: PIZZA_PERSONALIZATION_REPOSITORY,
          useValue: mockPizzaPersonalizationModel,
        },
      ],
    }).compile()

    repository = module.get<PizzaPersonalizationRepository>(PizzaPersonalizationRepository)
  })

  it('should be defined', () => {
    expect(repository).toBeDefined()
  })

  describe('findAll', () => {
    it('should return an array of PizzaPersonalizations', async () => {
      const mockPizzaPersonalizations = [{ id: 1, name: 'Margherita' }];
      (mockPizzaPersonalizationModel.findAll as jest.Mock).mockResolvedValue(mockPizzaPersonalizations)

      const result = await repository.findAll()
      expect(result).toEqual(mockPizzaPersonalizations)
    })

    it('should throw an error if findAll fails', async () => {
      (mockPizzaPersonalizationModel.findAll as jest.Mock).mockRejectedValue(new Error())

      await expect(repository.findAll()).rejects.toThrow()
    })
  })
})
