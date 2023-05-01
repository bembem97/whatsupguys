import React, { SVGProps } from "react"

const Svg: React.FC<SVGProps<SVGSVGElement>> = ({ children, ...props }) => {
    return (
        <svg
            fill="rgb(144 255 251)"
            width="800px"
            height="800px"
            viewBox="0 0 512px 512px"
            {...props}
        >
            {children}
        </svg>
    )
}

export default Svg
