import fs from "fs";
import path from "path";

export interface ToDo {
  id: number;
  task: string;
}

export async function getTodos(): Promise<ToDo[]> {
  const filePath = path.join(process.cwd(), "/src/todos.json");
  try {
    const data = await fs.promises.readFile(filePath, "utf8");
    const todos: ToDo[] = JSON.parse(data);
    return todos;
  } catch (err) {
    console.error(err);
    return [];
  }
}
