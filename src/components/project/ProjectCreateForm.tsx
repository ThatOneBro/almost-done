import { useForm } from "react-hook-form";
import { arktypeResolver } from "@hookform/resolvers/arktype";
import { type } from "arktype";

const schema = type({
  firstName: "string>5",
  lastName: "string>5",
  age: ["string>0", "|>", (n) => parseInt(n)],
});

export default function ProjectCreateForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: arktypeResolver(schema) });

  return (
    <form
      style={{ display: "flex", flexDirection: "column" }}
      onSubmit={handleSubmit((data) => console.log(data))}
    >
      <label htmlFor="firstName">First Name</label>
      <input {...register("firstName")} />

      <label htmlFor="firstName">Last Name</label>
      <input {...register("lastName", { required: true })} />
      {errors.lastName && <p>Last name is required.</p>}

      <label htmlFor="firstName">Age</label>
      <input type="number" {...register("age", { required: true })} />
      {errors.age && <p>Please enter a non-zero number for age.</p>}

      <input type="submit" />
    </form>
  );
}
