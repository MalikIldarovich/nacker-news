import { TColors, TSizes } from "@/components/ui/types";

export interface ITheSwitchProps {
    name?: string;
    icon?: string;
    iconType?: string;
    value?: string | boolean | number | undefined;
    trueValue?: string | boolean;
    falseValue?: string | boolean;
    reverse?: boolean;
    disabled?: boolean;
    changeActiveLabel: boolean;
    size?: Extract<TSizes, "sm" | "md" | "lg">;
    color?: Extract<TColors, "primary" | "default">;
};
