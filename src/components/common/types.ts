import type { TColors, TSizes } from "@/components/ui/types";

export interface INav {
    title: string;
    to: string;
}

export interface ISocial {
    icon: string;
    link: string;
    type: string;
}

export interface ILayoutNavProps {
    list: INav[];
}

export interface ITheSocialProps {
    list: ISocial[];
}

export interface ITheLoaderProps {   
    blur?: number,
    opacity?: number,
    size?: Extract<TSizes, "sm" | "md" | "lg" | "xl">,
    background?: Extract<TColors, "default" | "dark" | "light"> | "transparent",
}

export interface ITheLoaderIconProps {   
    type?: "grid" | "dots" | "circle";
    size?: TSizes | "full";
    withSekeleton?: boolean;
}
