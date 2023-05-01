import useElementSize from "@dir/src/hooks/useElementSize"
import React, { useEffect } from "react"
import tw, { theme } from "twin.macro"

interface Props {
    run: boolean
}

const Matrix = ({ run }: Props) => {
    const [squareRef, { width, height }] = useElementSize()

    useEffect(() => {
        const canvas = document.querySelector("canvas") as HTMLCanvasElement
        const ctx = canvas.getContext("2d")

        // canvas.width = window.innerWidth
        // canvas.height = window.innerHeight

        if (canvas.parentElement) {
            canvas.width = canvas.clientWidth
            canvas.height = canvas.clientHeight
        }

        const matrix =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@#$%^&*()*&^%+-/~{[|`]}"
        matrix.split("")

        const font_size = 20
        const columns = canvas.width / font_size
        const drops: number[] = []

        for (let x = 0; x < columns; x++) drops[x] = 1

        function draw() {
            if (ctx !== null) {
                ctx.fillStyle = "rgba(24, 35, 49, 0.05)"
                ctx.fillRect(0, 0, canvas.width, canvas.height)

                ctx.fillStyle = "#0F0"
                ctx.font = font_size + "px arial"

                for (let i = 0; i < drops.length; i++) {
                    const text =
                        matrix[Math.floor(Math.random() * matrix.length)]
                    ctx.fillText(text, i * font_size, drops[i] * font_size)

                    if (
                        drops[i] * font_size > canvas.height &&
                        Math.random() > 0.975
                    )
                        drops[i] = 0

                    drops[i]++
                }
            }
        }
        const matrixChar = setInterval(draw, 100)
        run === false && clearInterval(matrixChar)

        return () => clearInterval(matrixChar)
    }, [width, height, run])

    return (
        <>
            <canvas
                ref={squareRef}
                tw="block absolute top-0 left-0 -z-10 w-full h-[inherit]"
            ></canvas>
        </>
    )
}

export default Matrix
