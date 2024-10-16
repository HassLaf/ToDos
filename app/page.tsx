import NewTodoForm from "@/components/NewTodoForm";

const getDatabase = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return {
    name: "My Database",
  };
}

export default async function Home() {
  const data = await getDatabase();
  console.log(data);
  return (
    <div>
      <h1>My Homepage</h1>
      <NewTodoForm />
    </div>

  )
}
