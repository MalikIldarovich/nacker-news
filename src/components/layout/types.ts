import type {
    INav,
    ISocial,
} from "@/components/common/types";

export interface ILayoutHeaderProps {
    theme: "dark" | "light";
    navList: INav[]; 
}

export interface ILayoutFooterProps {
    socialList: ISocial[]; 
}
