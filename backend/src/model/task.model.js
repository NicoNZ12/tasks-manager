import {
  object,
  string,
  minLength,
  maxLength,
  boolean,
  date,
  pipe,
  safeParse,
  partial
} from 'valibot';

const taskModel = object({
  id: string(),

  title: pipe(
    string(),
    minLength(5, "The title is too short"),
    maxLength(60, "The title is too long"),
  ),

  description: pipe(
    string(),
    minLength(5, "The description is too short"),
    maxLength(255, "The description is too long")
  ),

  completed: boolean(),

  createdAt: date()
});

//array como almacenamiento en memoria
export const tasks = []

export const validateInput = (object) => {
    const result = safeParse(taskModel, object)
    return result
}

export const validateUpdateInput = (object) => {
    const partialSchema = partial(taskModel); 
    return safeParse(partialSchema, object);
}

