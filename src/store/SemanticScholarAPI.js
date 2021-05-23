export function getPaperFromApi(paperId, paperType) {
    const baseUrl = 'https://api.semanticscholar.org/v1/paper/'
    let url;
    if (paperType !== null && paperType !== undefined)
        url = baseUrl + paperType + ":" + paperId;
    else
        url = baseUrl + paperId;

    return fetch(url).then((response) =>response.json()).then((response)=> response)
}