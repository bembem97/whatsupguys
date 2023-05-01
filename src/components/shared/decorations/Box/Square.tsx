import tw, { styled } from "twin.macro"

{
    /* <div
        css={[
            tw`h-80 w-80 transform-3d relative`,
            `perspective: 800px;
            perspective-origin: center bottom;
            transform: translateZ(-800px);`,

            tw`before:(content-[""] left-0 right-0 bottom-0 h-8 absolute bg-primary rounded-bl-lg rounded-br-lg)`,
            `&::before {
                transform: translateZ(255px) translateY(160%);
            }`,
        ]}
    >
        <div
            css={[
                tw`w-full h-full bg-green-800 rounded-lg`,
                `transform: rotateX(55deg) translateY(50%);`,
            ]}
        ></div>
    </div> */
}

const SquareBear = styled("div")(() => [
    tw`h-80 w-80 transform-3d relative`,
    `perspective: 800px;
    perspective-origin: center bottom;
    transform: translateZ(-800px);`,

    tw`before:(content-[""] left-0 right-0 bottom-0 h-8 absolute bg-gray-800 rounded-bl-lg rounded-br-lg)`,
    `&::before {
        transform: translateZ(255px) translateY(160%);
    }`,
])

const SquareRoot = styled("div")(() => [
    tw`w-full h-full bg-gray-700 rounded-lg`,
    `transform: rotateX(55deg) translateY(50%);`,
])

const Square: React.FC = () => (
    <SquareBear>
        <SquareRoot />
    </SquareBear>
)

export default Square
