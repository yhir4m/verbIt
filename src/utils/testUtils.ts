
const testUtils = {

    getTestWords: async (filename:string)=>{
        const response = await fetch(`/locales/${filename}.json`)
        console.log(await response.json())
        
    },
    createWordsUrl:(level:string|undefined,course:string): string =>{
        return `${course}/${course}-words-${level}`
    }

};

export default testUtils;