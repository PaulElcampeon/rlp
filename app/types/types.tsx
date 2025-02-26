export type CachedData = {
    timeStamp: number
    data: QustionMapResponse
}

export type QustionMapResponse = {
    questions: Map<string, []>
}