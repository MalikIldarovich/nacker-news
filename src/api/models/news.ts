export interface INewsModel {
    id: number;
    by: string | null;
    descendants: number | null; 
    kids: number[] |  null;
    score: number | null;
    time: number | null;
    title: string; 
    type: "story" | "comment" | "job";
    url: string;
}

export interface ICommentModel {
    id: number
    time: number
    parent: number
    by: string;
    text: string;
    type: string;
    kids: number[];
}
