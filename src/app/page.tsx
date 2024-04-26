import { getTodos } from "../actions/getTodos";
import ToDoList from "./components/ToDoList";
import Demo from "./components/Demo";

export default async function Home({
  searchParams,
}: {
  searchParams: {
    filter: string;
  };
}) {
  const todos = await getTodos();

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-2xl font-bold mb-8">RSC Experiment with Next.js</h1>
      {todos.length > 0 ? (
        <ToDoList
          todos={
            searchParams.filter
              ? todos.filter((todo) =>
                  todo.task.toLocaleLowerCase().includes(searchParams.filter)
                )
              : todos
          }
        />
      ) : (
        <p>Add todos!</p>
      )}
      {!!searchParams.filter && <Demo />}
    </main>
  );
}
