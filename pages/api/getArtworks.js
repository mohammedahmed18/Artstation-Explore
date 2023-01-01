import axios from "axios";
import { PER_PAGE_ARTWORKS } from "../../constants";

const getApiUrl = (tab , page) => {
    return `https://www.artstation.com/api/v2/community/explore/projects/${tab.toLowerCase()}.json?page=${page}&per_page=${PER_PAGE_ARTWORKS}&dimension=all`;
};

export default async function handler(request, response) {
    const {tab , page} = request.query
    if(!tab || !page) response.status(400).json({msg :"both tab and page must be provided"})
    const url = getApiUrl(tab , page)

    const data = (await axios.get(url)).data
    response.json(data.data)
    response.end()
}