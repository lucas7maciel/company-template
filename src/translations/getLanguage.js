
export const getLanguage = (lang) => {
    const dir = `./${lang}`

    const result = {
        translation : {
            navbar: require(`${dir}/navbar.json`),
            home: require(`${dir}/home.json`),
            solutions: require(`${dir}/solutions.json`),
            contact: require(`${dir}/contact.json`)
        }
    }

    return result
}
