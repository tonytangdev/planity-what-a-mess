import fetch from 'node-fetch'
import { mergeWith, merge } from 'lodash'
import { informationData } from './interfaces/informationData'
import { jobData } from './interfaces/jobData.interface'
import { response } from './interfaces/response.interface'
import { userData } from './interfaces/userData.interface'

const INFO_URL = "https://recrutement-practice-default-rtdb.firebaseio.com/informations.json"

const JOBS_URL = "https://recrutement-practice-default-rtdb.firebaseio.com/jobs.json"

const USERS_URL = "https://recrutement-practice-default-rtdb.firebaseio.com/users.json"


const getInformationData = async (): Promise<response<informationData>> => {
    const res = await fetch(INFO_URL)
    const json = await res.json()

    return json as response<informationData>
}

const getJobsData = async (): Promise<response<jobData>> => {
    const res = await fetch(JOBS_URL)
    const json = await res.json()
    return json
}

const getUsersData = async (): Promise<response<userData>> => {
    const res = await fetch(USERS_URL)
    const json = await res.json()
    return json
}


const start = async () => {

    const infoData = await getInformationData()

    const jobsData = await getJobsData()

    const usersData = await getUsersData()

    // Sanitize infoData

    // Sanitize jobsData

    // Sanitize usersData

    // Merge usersData with jobsData

    // Merge previous mergedData with infoData

    // save output in file

}

start()