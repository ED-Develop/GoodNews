export const setIdInArrayObjects = (array) => {
    return array.map((a, index) => {
        return ({...a, source: {...a.source, id: index}})
    })
};