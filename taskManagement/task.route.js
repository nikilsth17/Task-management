import express from "express";
import { createTask, deleteTask, getAllTask, getTaskDetail, updateTask, updateTaskStatus } from "./task.service.js";
import { isUser } from "../auth/auth.middleware.js";

const router= express.Router();


//create a task
router.post("/api/tasks",isUser,createTask);


//retrieve all task
router.get("/api/tasks",isUser,getAllTask);

//retrieve the task's detail by id
router.get("/api/tasks/:id",isUser,getTaskDetail);


//update a task
router.put("/api/tasks/:id",updateTask);

//delete a task
router.delete("/api/tasks/:id",deleteTask);


// update only task status
router.patch("/api/tasks/:id/status", updateTaskStatus);


export default router;