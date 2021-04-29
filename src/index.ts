/**
 * This project was tested on Node version 15.10.0
 */

import fetch from 'node-fetch'
import { merge } from 'lodash'
import { informationData } from './interfaces/informationData'
import { jobData } from './interfaces/jobData.interface'
import { response } from './interfaces/response.interface'
import { userData } from './interfaces/userData.interface'
import { sanitizeData } from './helpers/sanitizeData'
import fs from 'fs'

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
    const sanitizedInfoData = sanitizeData(infoData)

    // Sanitize jobsData
    const sanitizedJobsData = sanitizeData(jobsData)

    // Sanitize usersData
    const sanitizedUsersData = sanitizeData(usersData)

    // Merge infoData with usersData
    // Reason : I know users data only contains "names" and we want "names"
    // from users data to always be picked over other tables.
    // And info data contains "jobs" that we want to always be picked over other tables.
    let mergedData = merge(sanitizedInfoData, sanitizedUsersData) // sanitizedUsersData data overrides sanitizedInfoData data if necessary

    // Merge jobsData with previous merged data
    // Reason : merged data contains the data "names" and "jobs" that we want to keep
    mergedData = merge(sanitizedJobsData, mergedData) // mergedData data overrides sanitizedJobsData data if necessary

    // save output in file
    fs.writeFile('result.json', JSON.stringify(mergedData, null, 4), (err) => {
        if (err) throw err

        console.log('Done.')
    })

}

start()