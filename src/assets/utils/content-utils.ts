import { INewsModel } from "@/api/models/news";
import { formatTimestamp } from "./format-utils";

export const getNewsInfoList = (item: INewsModel) => [
    {
        id: 1,
        label: "Название",
        value: item.title || "",
        icon: {
            name: "text",
            type: "solid",
        },
    },
    {   
        id: 3,
        label: "Дата",
        value: item.time ? formatTimestamp(item.time) : "",
        icon: {
            name: "calendar",
            type: "solid",
        },
    },
    {   
        id: 4,
        label: "Просмотры",
        value: item.score,
        icon: {
            name: "show",
            type: "solid",
        },
    },
    {   
        id: 5,
        label: "Комментарии",
        value: item.kids?.length ? item.kids?.length : 0,
        icon: {
            name: "chat",
            type: "solid",
        },
    },
    {   
        id: 0,
        label: "Автор",
        value: item.by || "", 
        icon: {
            name: "user",
            type: "solid",
        },
    },
];
