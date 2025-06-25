"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Task } from "@/lib/generated/prisma"
import { create } from "../actions/create"

const formSchema = z.object({
  id: z.string().min(2, {
    message: "id",
  }),
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  isCompleted: z.boolean()
})

export default function CreateForm() {
   const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: "",
      name: "",
      isCompleted: true,
    },
  })
 
  async function  onSubmit(values: z.infer<typeof formSchema>) {
    await create(values as Task)
    console.log(values)
    form.reset();
  }

  return (
    <div className="flex p-9 flexcol justify-center items-center m-auto mt-6">
        <div className="flex justify-center items-center rounded-2xl shadow-gray p-4 shadow-md">
            <Form {...form}>
      <form  onSubmit={form.handleSubmit(onSubmit)
      } className="flex justify-between space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="justify-center items-center mb-3">Add Task</FormLabel>
              <FormControl>
                <Input placeholder="reading" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      
        <Button className="m-5" type="submit">Add</Button>
      </form>
    </Form>
        </div>
        
        <Show/>
    </div>
  )
}