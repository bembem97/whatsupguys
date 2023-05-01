import React, { useContext } from "react"
import TabsContainer from "./TabsContainer"
import TabButton from "./TabButton"
import { ArticleContext } from "./TabContext"
import OnTarget from "@shared/decorations/OnTarget"
import tw from "twin.macro"

const categories = ["all", "html", "css", "javascript", "reactjs", "howto"]

const Tabs = ({ ...props }) => {
    const { setCategory } = useContext(ArticleContext)

    return (
        <TabsContainer {...props}>
            {categories.map((item, i) => (
                <OnTarget
                    key={i}
                    lock={false}
                    styles={tw`p-1`}
                    render={(styles) => (
                        <TabButton
                            onClick={() => setCategory(item)}
                            css={styles}
                        >
                            {item}
                        </TabButton>
                    )}
                />
            ))}
        </TabsContainer>
    )
}

export default Tabs
