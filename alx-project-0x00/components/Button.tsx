import React from "react";

interface ButtonProps {
    title: string;
    size?: "small" | "medium" | "large";
    shape?: "rounded" | "square";
    onClick?: () => void;
    className?: string;

}

const Button: React.FC<ButtonProps> = ({ 
    title, 
    size = "medium", 
    shape = "rounded", 
    onClick, className = "" }) => {
    
            const sizeClasses = {
            small: "px-3 py-1 text-sm",
            medium: "px-4 py-2 text-base",
            large: "px-5 py-3 text-lg",
        };
        return <button
      className={`
        bg-black text-white 
        ${sizeClasses[size]} 
        ${shape} 
        ${className}
      `}
    >
        {title}         
    </button>;
    }

    export default Button;