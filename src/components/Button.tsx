import React, { FC, MouseEventHandler } from "react";

interface IButton {
    children: React.ReactNode;
    disabled?: true | false;
    type?: "button" | "submit" | "reset" | undefined;
    variant?: "secondary" | "info" | "default" | undefined;
    size?: "lg" | "sm" | undefined;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

enum Variants {
    default = "#5C5C5C",
    secondary = "#E43109",
    info = "#5436A9",
}

const Button: FC<IButton> = ({
    children,
    disabled = false,
    type = "button",
    variant,
    onClick,
    size = "sm",
    ...rest
}) => {
    const style = {
        backgroundColor:
            variant === "info"
                ? Variants.info
                : variant === "secondary"
                ? Variants.secondary
                : Variants.default,
        height: size === "sm" ? "40px" : "50px",
        fontSize: size === "lg" ? "20px" : "16px",
    };

    return (
        <>
            <button
                type={type}
                onClick={onClick}
                style={style}
                disabled={disabled}
                className="flex items-center border-none px-[30px] rounded-[30px] text-center text-white"
                {...rest}
            >
                {children}
            </button>
        </>
    );
};

export default Button;
