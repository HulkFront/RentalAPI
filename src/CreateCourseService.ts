
interface Course {
    name: string;
        duration?: number;
        educator: string;
}

class CreateCurseService {
    
    execute({ name, duration = 8, educator }: Course) {
        console.log(name, duration, educator)
    }
}

export default new CreateCurseService();