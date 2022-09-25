import { Request, Response } from "express";
import CreateCourseService from "./CreateCourseService";


export function createCourse(request: Request, response: Response) {
    
    CreateCourseService.execute({ 
        educator:"Glauber",
        name:"NodeJs",  
        duration: 10
    });
    CreateCourseService.execute({ 
        educator:"Diego",
        name:"ReactJs",  
    });
    return response.send();
}