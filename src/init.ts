import { config } from 'dotenv'
import { ApaleoConnectAdaptor } from '@cord-travel/pms-connect-apaleo'
config()

let apaleo: ApaleoConnectAdaptor;

const { APALEO_CLIENT_ID, APALEO_CLIENT_SECRET, APALEO_REDIRECT_URI, TEST_APALEO_REFRESH_TOKEN } = process.env

export function getCredentials() {

    return {
        client_id: APALEO_CLIENT_ID,
        client_secret: APALEO_CLIENT_SECRET,
        redirect_uri: APALEO_REDIRECT_URI,
        refresh_token: TEST_APALEO_REFRESH_TOKEN

    }
}

function createApaleoInstance() {

    apaleo = new ApaleoConnectAdaptor(getCredentials())
}


createApaleoInstance();

export function getApaleoInstance(): ApaleoConnectAdaptor {
    return apaleo
}