// 'use client'
// import { Task } from "@/lib/generated/prisma";
//     import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table"
// import { getTasks } from "../actions/create";
// import { Button } from "@/components/ui/button";
// import CreateForm from "../create/page";
// // import { Alert } from "@/components/alert";

// const tasks = await getTasks();

// export async function show() {
//   return (
//         <div className="flex justify-center item-center m-0">
//            <Table>
//          <div className="flex justify-center item-center p-3 mb-3">
//       <TableCaption>A list of tasks to be done</TableCaption>
//       <TableHeader>
//         <TableRow>
//           <TableHead className="w-[100px]">sr no</TableHead>
//           <TableHead>Task</TableHead>
//           <TableHead>completed</TableHead>
//           <TableHead>Add</TableHead>
//           <TableHead>Delete</TableHead>
//         </TableRow>
//       </TableHeader>
//       </div>
//       <div className="flex justify-center item-center p-3 mb-3">
//       <TableBody>
//         {tasks.data.map((task: Task) => (
//           <TableRow key={task.id}>
//             <TableCell className="font-medium">{task.name}</TableCell>
//             <TableCell className="font-medium">{task.isCompleted? true: false }</TableCell>
//             <TableCell className="font-medium">
//                 <Button>
//                     <CreateForm/>
//                 </Button>
//             </TableCell>
//             <TableCell className="font-medium">
//               {/* <Alert/> */}
//             </TableCell>
//           </TableRow>
//         ))}
//       </TableBody>
//       </div>
//     </Table>
         
//         </div>

//   )
// }
