import { StudentRepository } from "../../../src/domain/forum/application/repository/student-repository";
import { Student } from "../../../src/domain/forum/enterprice/student";

export class InMemoryStudentREpository implements StudentRepository{
  public items: Student[] = []

  async create(student: Student) {
    this.items.push(student)
  }
}