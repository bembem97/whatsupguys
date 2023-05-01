import CardList from "@shared/containers/CardList"
import { useContext } from "react"
import { ArticleContext } from "./TabContext"

const TabPanel = () => {
    const { data } = useContext(ArticleContext)

    if (!data) {
        return <div>No Data</div>
    }

    return <CardList data={data} />
}

export default TabPanel
