"use client";

import { useForm } from "react-hook-form";
import { arktypeResolver } from "@hookform/resolvers/arktype";
import { type } from "arktype";

const schema = type({
  projectName: "string>3",
  targetEndDate: "Date",
});

export default function ProjectCreateForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: arktypeResolver(schema) });

  // TODO: Go through this and pull out AntD styling and apply it to the form
  //        <Form
  //   {...formItemLayout}
  //   layout={formLayout}
  //   form={form}
  //   initialValues={{ layout: formLayout }}
  //   onValuesChange={onFormLayoutChange}
  //   style={{ maxWidth: formLayout === "inline" ? "none" : 600 }}
  //   onFinish={onFinish}
  // >
  //   <Form.Item label="Project Name" name="projectName">
  //     <Input placeholder="input placeholder" />
  //   </Form.Item>
  //   <Form.Item label="Expected End Date" name="expectedEndDate">
  //     <Input placeholder="input placeholder" />
  //   </Form.Item>
  //   <Form.Item {...buttonItemLayout}>
  //     <Button type="primary" htmlType="submit">
  //       Submit
  //     </Button>
  //   </Form.Item>
  // </Form>

  return (
    <form
      style={{ display: "flex", flexDirection: "column" }}
      onSubmit={handleSubmit((data) => console.log(data))}
    >
      <label htmlFor="projectName">Project Name</label>
      <input {...register("projectName", { required: true })} />
      {errors.projectName && <p>Target End Date is required.</p>}

      <label htmlFor="targetEndDate">Target End Date</label>
      <input {...register("targetEndDate", { required: true })} />
      {errors.targetEndDate && <p>Target End Date is required.</p>}

      <input type="submit" />
    </form>
  );
}
