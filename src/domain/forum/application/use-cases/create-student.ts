import { Student, StudentProps } from "../../enterprice/student";
import { StudentRepository } from "../repository/student-repository";

interface CreateStudentUseCaseRequest {
  name: string
}

export class CreateStudentUseCase {
  constructor (private studentRepository: StudentRepository){ }

  async execute({name}: CreateStudentUseCaseRequest){
   const student = Student.create({
    name
   })

   await this.studentRepository.create(student)

   return {
    student
   }
  }
}