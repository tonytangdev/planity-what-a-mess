import { informationData } from "../../interfaces/informationData"
import { jobData } from "../../interfaces/jobData.interface"
import { response } from "../../interfaces/response.interface"
import { userData } from "../../interfaces/userData.interface"
import { sanitizeData } from "../sanitizeData"

test('should sanitize infoData', () => {
    const infoData: response<informationData> = {
        '-MYaJYUrII35RcHQsSIB': { age: 37, city: 'versailleS' },
        '-MYaJYfv5N5ENN_Xx-af': { age: 27 },
        '-MYaJYhfB3K6JOxs9glD': { age: 32 },
        '-MYaJYjPRSrb7EUP7rUv': { age: 28, city: 'Paris' },
        '-MYaJYmusYDxbkbIMfk1': { age: 27, city: 'La banlieu', job: 'Junior Developer' },
        '-MYaJYoe5hsOQne1Kkex': { city: 'PARIS' },
        '-MYaJYqQuZO8RNhZybks': { age: 12, city: 'pAriS' },
        '-MYaJYs9t7o8NIEgOtZm': { age: 25 }
    }

    const expected: response<informationData> = {
        '-MYaJYUrII35RcHQsSIB': { age: 37, city: 'Versailles' },
        '-MYaJYfv5N5ENN_Xx-af': { age: 27 },
        '-MYaJYhfB3K6JOxs9glD': { age: 32 },
        '-MYaJYjPRSrb7EUP7rUv': { age: 28, city: 'Paris' },
        '-MYaJYmusYDxbkbIMfk1': { age: 27, city: 'La banlieu', job: 'Junior Developer' },
        '-MYaJYoe5hsOQne1Kkex': { city: 'Paris' },
        '-MYaJYqQuZO8RNhZybks': { age: 12, city: 'Paris' },
        '-MYaJYs9t7o8NIEgOtZm': { age: 25 }
    }

    const res = sanitizeData(infoData)

    expect(res).toStrictEqual(expected)
})

test('should sanitize userData', () => {
    const userData: response<userData> = {
        '-MYaJYUrII35RcHQsSIB': { name: 'P4ul' },
        '-MYaJYfv5N5ENN_Xx-af': { name: 'V1nc3nt' },
        '-MYaJYhfB3K6JOxs9glD': { name: 'Qu3nt1n' },
        '-MYaJYjPRSrb7EUP7rUv': { name: '4nh-J0' },
        '-MYaJYl93f0fXBJPvSqG': { name: '4lex' },
        '-MYaJYmusYDxbkbIMfk1': { name: 'N1n4' },
        '-MYaJYoe5hsOQne1Kkex': { name: 'F4b13n' },
        '-MYaJYqQuZO8RNhZybks': { name: '#ERROR' },
        '-MYaJYs9t7o8NIEgOtZm': { name: 'T0ny' }
    }

    const expected: response<userData> = {
        '-MYaJYUrII35RcHQsSIB': { name: 'Paul' },
        '-MYaJYfv5N5ENN_Xx-af': { name: 'Vincent' },
        '-MYaJYhfB3K6JOxs9glD': { name: 'Quentin' },
        '-MYaJYjPRSrb7EUP7rUv': { name: 'anh-Jo' },
        '-MYaJYl93f0fXBJPvSqG': { name: 'alex' },
        '-MYaJYmusYDxbkbIMfk1': { name: 'Nina' },
        '-MYaJYoe5hsOQne1Kkex': { name: 'Fabien' },
        '-MYaJYs9t7o8NIEgOtZm': { name: 'Tony' }
    }

    const res = sanitizeData(userData)

    expect(res).toStrictEqual(expected)
})

test('should sanitize jobData', () => {
    const jobData: response<jobData> = {
        '-MYaJYUrII35RcHQsSIB': { job: 'CTO', name: 'Poul' },
        '-MYaJYfv5N5ENN_Xx-af': { age: 289, job: 'Developer' },
        '-MYaJYhfB3K6JOxs9glD': { job: 'Engeneering Manager', name: 'Queeeentin' },
        '-MYaJYjPRSrb7EUP7rUv': { job: 'DevOps' },
        '-MYaJYl93f0fXBJPvSqG': { job: 'Developer' },
        '-MYaJYoe5hsOQne1Kkex': { job: 'Senior Developer' },
        '-MYaJYqQuZO8RNhZybks': { job: 'Developer', name: 'L43t1t14' },
        '-MYaJYs9t7o8NIEgOtZm': { job: 'Developer', name: 'Ttoto' }
    }

    const expected: response<jobData> = {
        '-MYaJYUrII35RcHQsSIB': { job: 'CTO', name: 'Poul' },
        '-MYaJYfv5N5ENN_Xx-af': { age: 289, job: 'Developer' },
        '-MYaJYhfB3K6JOxs9glD': { job: 'Engeneering Manager', name: 'Queeeentin' },
        '-MYaJYjPRSrb7EUP7rUv': { job: 'DevOps' },
        '-MYaJYl93f0fXBJPvSqG': { job: 'Developer' },
        '-MYaJYoe5hsOQne1Kkex': { job: 'Senior Developer' },
        '-MYaJYqQuZO8RNhZybks': { job: 'Developer', name: 'Laetitia' },
        '-MYaJYs9t7o8NIEgOtZm': { job: 'Developer', name: 'Ttoto' }
    }

    const res = sanitizeData(jobData)

    expect(res).toStrictEqual(expected)
})