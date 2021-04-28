import fetch from 'node-fetch'
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
    console.log(infoData)

    const jobsData = await getJobsData()
    console.log(jobsData)

    const usersData = await getUsersData()
    console.log(usersData)

    // Merge data
    // each field has a prefix to know where it is from

    // filter fields to select the correct ones (sanitize + sort)

    // output is done

}

start()