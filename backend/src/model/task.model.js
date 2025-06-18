import {
  object,
  string,
  minLength,
  maxLength,
  boolean,
  date,
  default as vDefault,
  optional,
  pipe
} from 'valibot';

const taskModel = object({
  id: string(),

  title: pipe(
    string(),
    minLength(5, "The title is too short"),
    maxLength(60, "The title is too long")
  ),

  description: pipe(
    string(),
    minLength(5, "The description is too short"),
    maxLength(255, "The description is too long")
  ),

  completed: optional(vDefault(boolean(), false)),

  createdAt: optional(vDefault(date(), () => new Date())),
  updatedAt: optional(vDefault(date(), () => new Date()))
});

//array como almacenamiento en memoria
const tasks = []

export default {
    taskModel,
    tasks
}
