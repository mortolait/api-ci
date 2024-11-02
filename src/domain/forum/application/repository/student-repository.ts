import { Student } from "../../enterprice/student"

export interface StudentRepository {
  create(student: Student): Promise<void>
}