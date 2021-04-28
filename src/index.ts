import fetch from 'node-fetch'
import { informationData } from './interfaces/informationData'
import { jobData } from './interfaces/jobData.interface'
import { userData } from './interfaces/userData.interface'

const INFO_URL = "https://recrutement-practice-default-rtdb.firebaseio.com/informations.json"

const JOBS_URL = "https://recrutement-practice-default-rtdb.firebaseio.com/jobs.json"

const USERS_URL = "https://recrutement-practice-default-rtdb.firebaseio.com/users.json"


const getInformationData = async (): Promise<Map<string, informationData>> => {
    const res = await fetch(INFO_URL)
    const json = await res.json()

    return json as Map<string, informationData>
}

const getJobsData = async (): Promise<Map<string, jobData>> => {
    const res = await fetch(JOBS_URL)
    const json = await res.json()
    return json
}

const getUsersData = async (): Promise<Map<string, userData>> => {
    const res = await fetch(USERS_URL)
    const json = await res.json()
    return json
}

const start = async () => {

    const infoData = await getInformationData()

    const jobsData = await getJobsData()

    const usersData = await getUsersData()

    console.log(usersData)
}

start()