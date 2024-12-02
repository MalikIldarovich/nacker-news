/** Firebase Database */
import { database } from "@/api/firebase";

import { 
    ref,
    get,
    child,
} from "firebase/database";


/** Константы **/
const API_URL = {
    list: "v0/topstories",
    item: "v0/item/"
};

/** Запрос новостей **/
async function fetchNews(limin: number = 100) {
    const topStoriesRef = child(ref(database), API_URL.list);
    const res = await get(topStoriesRef);

    if (res.exists()) {
        return res.val().slice(0, limin);
    }

    throw new Error("Не удалось загрузить список новостей");
}

/** Запрос новости **/
async function fetchItem(itemId: number) {
    const itemRef = child(ref(database), `${API_URL.item}${itemId}`);
    const res = await get(itemRef);

    if (res.exists()) {
        return res.val();
    }

    throw new Error(`Не удалось загрузить элемент с ID: ${itemId}`);
}

export {
    fetchNews,
    fetchItem,
};
