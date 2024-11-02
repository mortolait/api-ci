import { faker } from '@faker-js/faker'

import { Student, StudentProps } from "../../src/domain/forum/enterprice/student";

export function makeStudent(
  override: Partial<StudentProps> = {},
  id?: string
){
  const student = Student.create(
    {
      name: faker.person.firstName(),
      ...override
    },
    id,
  )

  return student
}