import { fullData } from "../../interfaces/fullData.interface"
import { informationData } from "../../interfaces/informationData"
import { response } from "../../interfaces/response.interface"
import { userData } from "../../interfaces/userData.interface"
import { merge } from 'lodash'
import { jobData } from "../../interfaces/jobData.interface"

test('should return object with names overriding by usersData', () => {
    const infoData: response<informationData> = {
        '-MYaJYUrII35RcHQsSIB': { age: 37, city: 'Versailles' },
        '-MYaJYfv5N5ENN_Xx-af': { age: 27 },
        '-MYaJYhfB3K6JOxs9glD': { age: 32 },
        '-MYaJYjPRSrb7EUP7rUv': { age: 28, city: 'Paris' },
        '-MYaJYmusYDxbkbIMfk1': { age: 27, city: 'La banlieu', job: 'Junior Developer' },
        '-MYaJYoe5hsOQne1Kkex': { city: 'Paris' },
        '-MYaJYqQuZO8RNhZybks': { age: 12, city: 'Paris' },
        '-MYaJYs9t7o8NIEgOtZm': { age: 25 }
    }

    const usersData: response<userData> = {
        '-MYaJYUrII35RcHQsSIB': { name: 'Paul' },
        '-MYaJYfv5N5ENN_Xx-af': { name: 'Vincent' },
        '-MYaJYhfB3K6JOxs9glD': { name: 'Quentin' },
        '-MYaJYjPRSrb7EUP7rUv': { name: 'anh-Jo' },
        '-MYaJYl93f0fXBJPvSqG': { name: 'alex' },
        '-MYaJYmusYDxbkbIMfk1': { name: 'Nina' },
        '-MYaJYoe5hsOQne1Kkex': { name: 'Fabien' },
        '-MYaJYs9t7o8NIEgOtZm': { name: 'Tony' }
    }

    const expectedData: response<any> = {
        '-MYaJYUrII35RcHQsSIB': { age: 37, city: 'Versailles', name: 'Paul' },
        '-MYaJYfv5N5ENN_Xx-af': { age: 27, name: 'Vincent' },
        '-MYaJYhfB3K6JOxs9glD': { age: 32, name: 'Quentin' },
        '-MYaJYjPRSrb7EUP7rUv': { age: 28, city: 'Paris', name: 'anh-Jo' },
        '-MYaJYl93f0fXBJPvSqG': { name: 'alex' },
        '-MYaJYmusYDxbkbIMfk1': { age: 27, city: 'La banlieu', job: 'Junior Developer', name: 'Nina' },
        '-MYaJYoe5hsOQne1Kkex': { city: 'Paris', name: 'Fabien' },
        '-MYaJYqQuZO8RNhZybks': { age: 12, city: 'Paris' },
        '-MYaJYs9t7o8NIEgOtZm': { age: 25, name: 'Tony' }
    }

    const res = merge(infoData, usersData)

    expect(res).toStrictEqual(expectedData)
})

test('should return object with age overriding previous mergedData', () => {
    const previousMergedData: response<any> = {
        '-MYaJYUrII35RcHQsSIB': { age: 37, city: 'Versailles', name: 'Paul' },
        '-MYaJYfv5N5ENN_Xx-af': { age: 27, name: 'Vincent' },
        '-MYaJYhfB3K6JOxs9glD': { age: 32, name: 'Quentin' },
        '-MYaJYjPRSrb7EUP7rUv': { age: 28, city: 'Paris', name: 'anh-Jo' },
        '-MYaJYl93f0fXBJPvSqG': { name: 'alex' },
        '-MYaJYmusYDxbkbIMfk1': { age: 27, city: 'La banlieu', job: 'Junior Developer', name: 'Nina' },
        '-MYaJYoe5hsOQne1Kkex': { city: 'Paris', name: 'Fabien' },
        '-MYaJYqQuZO8RNhZybks': { age: 12, city: 'Paris' },
        '-MYaJYs9t7o8NIEgOtZm': { age: 25, name: 'Tony' }
    }

    const jobsData: response<jobData> = {
        '-MYaJYUrII35RcHQsSIB': { job: 'CTO', name: 'Poul' },
        '-MYaJYfv5N5ENN_Xx-af': { age: 289, job: 'Developer' },
        '-MYaJYhfB3K6JOxs9glD': { job: 'Engeneering Manager', name: 'Queeeentin' },
        '-MYaJYjPRSrb7EUP7rUv': { job: 'DevOps' },
        '-MYaJYl93f0fXBJPvSqG': { job: 'Developer' },
        '-MYaJYoe5hsOQne1Kkex': { job: 'Senior Developer' },
        '-MYaJYqQuZO8RNhZybks': { job: 'Developer', name: 'Laetitia' },
        '-MYaJYs9t7o8NIEgOtZm': { job: 'Developer', name: 'Ttoto' }
    }

    const expectedData: response<fullData> = {
        '-MYaJYUrII35RcHQsSIB': { age: 37, city: 'Versailles', name: 'Paul', job: 'CTO' },
        '-MYaJYfv5N5ENN_Xx-af': { age: 27, name: 'Vincent', job: 'Developer' },
        '-MYaJYhfB3K6JOxs9glD': { age: 32, name: 'Quentin', job: 'Engeneering Manager' },
        '-MYaJYjPRSrb7EUP7rUv': { age: 28, city: 'Paris', name: 'anh-Jo', job: 'DevOps' },
        '-MYaJYl93f0fXBJPvSqG': { name: 'alex', job: 'Developer' },
        '-MYaJYmusYDxbkbIMfk1': { age: 27, city: 'La banlieu', job: 'Junior Developer', name: 'Nina' },
        '-MYaJYoe5hsOQne1Kkex': { city: 'Paris', name: 'Fabien', job: 'Senior Developer' },
        '-MYaJYqQuZO8RNhZybks': { age: 12, city: 'Paris', job: 'Developer', name: 'Laetitia' },
        '-MYaJYs9t7o8NIEgOtZm': { age: 25, name: 'Tony', job: 'Developer' }
    }

    const res = merge(jobsData, previousMergedData)

    expect(res).toStrictEqual(expectedData)
})

test('should return full data', () => {

    const infoData: response<informationData> = {
        '-MYaJYUrII35RcHQsSIB': { age: 37, city: 'Versailles' },
        '-MYaJYfv5N5ENN_Xx-af': { age: 27 },
        '-MYaJYhfB3K6JOxs9glD': { age: 32 },
        '-MYaJYjPRSrb7EUP7rUv': { age: 28, city: 'Paris' },
        '-MYaJYmusYDxbkbIMfk1': { age: 27, city: 'La banlieu', job: 'Junior Developer' },
        '-MYaJYoe5hsOQne1Kkex': { city: 'Paris' },
        '-MYaJYqQuZO8RNhZybks': { age: 12, city: 'Paris' },
        '-MYaJYs9t7o8NIEgOtZm': { age: 25 }
    }

    const usersData: response<userData> = {
        '-MYaJYUrII35RcHQsSIB': { name: 'Paul' },
        '-MYaJYfv5N5ENN_Xx-af': { name: 'Vincent' },
        '-MYaJYhfB3K6JOxs9glD': { name: 'Quentin' },
        '-MYaJYjPRSrb7EUP7rUv': { name: 'anh-Jo' },
        '-MYaJYl93f0fXBJPvSqG': { name: 'alex' },
        '-MYaJYmusYDxbkbIMfk1': { name: 'Nina' },
        '-MYaJYoe5hsOQne1Kkex': { name: 'Fabien' },
        '-MYaJYs9t7o8NIEgOtZm': { name: 'Tony' }
    }

    const jobsData: response<jobData> = {
        '-MYaJYUrII35RcHQsSIB': { job: 'CTO', name: 'Poul' },
        '-MYaJYfv5N5ENN_Xx-af': { age: 289, job: 'Developer' },
        '-MYaJYhfB3K6JOxs9glD': { job: 'Engeneering Manager', name: 'Queeeentin' },
        '-MYaJYjPRSrb7EUP7rUv': { job: 'DevOps' },
        '-MYaJYl93f0fXBJPvSqG': { job: 'Developer' },
        '-MYaJYoe5hsOQne1Kkex': { job: 'Senior Developer' },
        '-MYaJYqQuZO8RNhZybks': { job: 'Developer', name: 'Laetitia' },
        '-MYaJYs9t7o8NIEgOtZm': { job: 'Developer', name: 'Ttoto' }
    }

    const expectedData: response<fullData> = {
        '-MYaJYUrII35RcHQsSIB': { age: 37, city: 'Versailles', name: 'Paul', job: 'CTO' },
        '-MYaJYfv5N5ENN_Xx-af': { age: 27, name: 'Vincent', job: 'Developer' },
        '-MYaJYhfB3K6JOxs9glD': { age: 32, name: 'Quentin', job: 'Engeneering Manager' },
        '-MYaJYjPRSrb7EUP7rUv': { age: 28, city: 'Paris', name: 'anh-Jo', job: 'DevOps' },
        '-MYaJYl93f0fXBJPvSqG': { name: 'alex', job: 'Developer' },
        '-MYaJYmusYDxbkbIMfk1': { age: 27, city: 'La banlieu', job: 'Junior Developer', name: 'Nina' },
        '-MYaJYoe5hsOQne1Kkex': { city: 'Paris', name: 'Fabien', job: 'Senior Developer' },
        '-MYaJYqQuZO8RNhZybks': { age: 12, city: 'Paris', job: 'Developer', name: 'Laetitia' },
        '-MYaJYs9t7o8NIEgOtZm': { age: 25, name: 'Tony', job: 'Developer' }
    }

    let mergedData = merge(infoData, usersData)
    mergedData = merge(jobsData, mergedData)

    expect(mergedData).toStrictEqual(expectedData)
})