// How many milliseconds for a single request to time out（Reference value，If continuous timeout, it will be adjusted to twice the previous time）
const TIMEOUT_BASE = 7000
// Maximum timeout setting，For example, for a certain request, the first 7s timeout, the second 14s, the third 28s, the fourth 56s, the fifth is not 112s but 60
const TIMEOUT_MAX = 60000

const LOG_DELAY = 5000 //  Log output interval, in milliseconds
const PAGE_SIZE = 1000 // Each network request to read the number of files in the directory, the larger the value, the more likely it will time out, and it should not exceed 1000

const RETRY_LIMIT = 7 // The maximum number of retries allowed, If a request fails
const PARALLEL_LIMIT = 20 // The number of parallel network requests can be adjusted according to the network environment

const DEFAULT_TARGET = '' // Required. Copy the default destination ID. If target is not specified, it will be copied here. It is recommended to fill in the team drive ID

const AUTH = { // If you have the json authorization file of the service account, you can copy it to the sa directory instead of client_id/secret/refrest_token
  client_id: '598898702449-37ljdnqpftl4fqav3in5mpqhv7aa0vr1.apps.googleusercontent.com',
  client_secret: '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',
  refresh_token: '1//04C8wV4oUukODCgYIARAAGAQSNwF-L9Ir9Ad1oRcE8kF5W5C4hBP8YHwDNHzeoZOZqacMOV84QDr8UTAUStfZEeFkVkUao9ot0Ws',
  expires: 0, // Can be left blank
  access_token: 'ya29.a0ARrdaM9woS6fsLPYan6mgaK6v2QBlbwP5pOWBhfmOfjc_b2droWajdrOTtH2WCX1zGMuK3WbaZjZLXITxV8-HgFaNo_Q2Cz8wXmFRGIICynkHyf1w8dv1_JwcPPfNWhyvpmvKgcFWNDw7_6plgA2Mhwj_Xhb', // Can be left blank
  tg_token: '2099135566:AAHctu0NfTrxX4_Dm2T4PTwffsKHB-DfwB0', // Your telegram bot token，Go here https://core.telegram.org/bots#6-botfather
  tg_whitelist: [''] // Your tg username(t.me/username)，The bot will only execute commands sent by users in this list
}

module.exports = { AUTH, PARALLEL_LIMIT, RETRY_LIMIT, TIMEOUT_BASE, TIMEOUT_MAX, LOG_DELAY, PAGE_SIZE, DEFAULT_TARGET }
