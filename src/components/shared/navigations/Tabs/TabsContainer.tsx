import tw, { css, styled } from "twin.macro"

const TabsContainer = styled("section")(() => [
    tw`flex basis-auto grow shrink flex-wrap justify-center gap-1 sticky top-0 z-navbar`,
])

export default TabsContainer
