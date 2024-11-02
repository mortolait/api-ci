import { beforeEach, describe, it } from "vitest"
import { InMemoryStudentREpository } from "../../../../../test/repositories/in-memory-student-repository/in-memory-student-repository"
import { CreateStudentUseCase } from "./create-student"
import { Student } from "../../enterprice/student"

let inMemoryStudentREpository: InMemoryStudentREpository
let sut: CreateStudentUseCase

describe("create a student", ()=> {
  beforeEach(()=> {
    inMemoryStudentREpository = new InMemoryStudentREpository()
    sut = new CreateStudentUseCase(inMemoryStudentREpository)
  })

  it("should be able to create a user", async ()=> {
     await sut.execute({
      name: 'example name'
     })
   })
})