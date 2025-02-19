const ALL_COURSES = import.meta.env.VITE_ALL_COURSES.split(","); ;

const coursesUtils = {

    changeUserCourse : (userCourse:string,setUserCourse: (course: string) => void, newCourse:string)=>{
        if(userCourse === newCourse)return 
        if(ALL_COURSES.includes(newCourse)) setUserCourse(newCourse)
        else console.log("invalid course")
        return
    }
};

export default coursesUtils;