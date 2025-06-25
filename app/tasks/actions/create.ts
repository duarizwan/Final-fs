'use server'

import prisma from "@/lib/db"
import { Task } from "@/lib/generated/prisma"

export async function create(formData: Task) {
await prisma.task.create({
    data:{
        id : formData.id,
        name : formData.name,
        isCompleted : formData.isCompleted,

    }
})
}

export async function getTasks() {
const task = await prisma.task.findMany({
    where : {
        isCompleted : true

    }
})
return{
    success : true
}
}
export async function delTask(_id : string) {
const task = await prisma.task.delete({
    where : {
        id : _id
    }
})
}