import type { INewsModel } from "@/api/models/news";

export interface ITheNewsListProps {
    list: INewsModel[];
    isLoading: boolean;
}

export interface ITheNewsItemProps {
    index: number;
    item: INewsModel,
}

export interface ITheNewsIdProps {
    item: INewsModel,
}

export interface ITheNewsCommentsProps {
    ids: number[];
};
