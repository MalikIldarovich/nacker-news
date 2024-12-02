/** Firebase App */
import { initializeApp } from "firebase/app";

/** Firebase Database */
import { 
    ref,
    get,
    onValue,
    getDatabase,
} from "firebase/database";


export interface IApi {
    version: string;
    config: { databaseURL: string };
}

const firebaseSettings = {
    version: "/v0",
    config: { databaseURL: "https://hacker-news.firebaseio.com" },
};

const app = initializeApp(firebaseSettings.config);
const database = getDatabase(app);

export { 
    ref,
    get,
    onValue,
    database,
};