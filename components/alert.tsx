'use client'

import { delTask } from "@/app/tasks/actions/create"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import {  Trash2 } from "lucide-react"
import { useRouter } from "next/router"

interface Delprops{
id: string
}

const Alert = ({id}: Delprops)=>{
    // const router = useRouter()
const handleDel =async()=>{
    await delTask(id)
    // router.refresh();
}
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="ghost">
                    <Trash2 className="bg-red-100"/>
                </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDel}>Delete</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
