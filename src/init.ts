import { config } from "dotenv";
import { createStore } from "@cord-travel/pms-connect";
import { ApaleoConnectAdaptor } from "@cord-travel/pms-connect-apaleo";
import writeJsonfile from "write-json-file";
import loadJsonFile from "load-json-file";
config();

const APALEO_CONFIG_FILE = "apaleo.config.json";

let apaleo: ApaleoConnectAdaptor;

const {
  APALEO_CLIENT_ID,
  APALEO_CLIENT_SECRET,
  APALEO_REDIRECT_URI,
  TEST_APALEO_REFRESH_TOKEN,
} = process.env;

export async function getCredentials() {
  let content: any = null;
  try {
    content = await loadJsonFile(APALEO_CONFIG_FILE);
  } catch (e) {}

  return {
    client_id: APALEO_CLIENT_ID,
    client_secret: APALEO_CLIENT_SECRET,
    redirect_uri: APALEO_REDIRECT_URI,
    refresh_token: TEST_APALEO_REFRESH_TOKEN,
    access_token: content && content.access_token ? content.access_token : "",
  };
}

export async function createApaleoInstance() {
  const credentials = await getCredentials();
  apaleo = new ApaleoConnectAdaptor(credentials);

  apaleo.setTokenStore(
    createStore(async (tokens) => {
      console.log(tokens);

      if (tokens && tokens.access_token) {
        let apaleoConfigFile = {
          access_token: tokens.access_token,
        };

        await writeJsonfile(APALEO_CONFIG_FILE, apaleoConfigFile);
      }
    })
  );
}

export function getApaleoInstance(): ApaleoConnectAdaptor {
  return apaleo;
}
