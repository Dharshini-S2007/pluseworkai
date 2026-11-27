import { useState } from "react";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { z } from "zod";

import "./CreateTask.css";


// ZOD VALIDATION SCHEMA

const taskSchema = z.object({

    taskTitle: z.string()
        .trim()
        .min(3, "Task title must contain at least 3 characters"),

    description: z.string()
        .trim()
        .min(5, "Description must contain at least 5 characters"),

    assignedEmployee: z.string()
        .min(1, "Please select an employee"),

    priority: z.string()
        .refine(
            (value) => ["Low", "Medium", "High"].includes(value),
            "Please select a priority"
        ),

    dueDate: z.string()
        .min(1, "Please select a due date"),

    taskStatus: z.string()
        .refine(
            (value) => ["Pending", "In Progress", "Completed"].includes(value),
            "Please select a task status"
        )

});


function CreateTask() {

    const [tasks, setTasks] = useState([]);

    const [successMessage, setSuccessMessage] = useState("");


    // REACT HOOK FORM

    const {

        register,

        handleSubmit,

        formState: { errors },

        reset

    } = useForm({

        resolver: zodResolver(taskSchema),

        defaultValues: {

            taskTitle: "",
            description: "",
            assignedEmployee: "",
            priority: "",
            dueDate: "",
            taskStatus: ""

        }

    });


    // FORM SUBMISSION

    const onSubmit = (data) => {

        const newTask = {

            ...data,

            id: Date.now()

        };

        setTasks((previousTasks) => [
            ...previousTasks,
            newTask
        ]);

        setSuccessMessage("Task created successfully!");

        reset();

    };


    return (

        <div className="task-page">

            <div className="task-card">

                <div className="task-header">

                    <h1>Create New Task</h1>

                    <p>
                        Enter the details below to create a new task.
                    </p>

                </div>


                {/* SUCCESS MESSAGE */}

                {successMessage && (

                    <div className="success-message">

                        {successMessage}

                    </div>

                )}


                <form onSubmit={handleSubmit(onSubmit)}>

                    {/* TASK TITLE */}

                    <div className="form-group">

                        <label>Task Title</label>

                        <input
                            type="text"
                            placeholder="Enter task title"
                            {...register("taskTitle")}
                        />

                        {errors.taskTitle && (

                            <span className="error">
                                {errors.taskTitle.message}
                            </span>

                        )}

                    </div>


                    {/* DESCRIPTION */}

                    <div className="form-group">

                        <label>Description</label>

                        <textarea
                            placeholder="Enter task description"
                            {...register("description")}
                        />

                        {errors.description && (

                            <span className="error">
                                {errors.description.message}
                            </span>

                        )}

                    </div>


                    {/* ASSIGNED EMPLOYEE */}

                    <div className="form-group">

                        <label>Assigned Employee</label>

                        <select {...register("assignedEmployee")}>

                            <option value="">
                                Select Employee
                            </option>

                            <option value="John">
                                John
                            </option>

                            <option value="David">
                                David
                            </option>

                            <option value="Sarah">
                                Sarah
                            </option>

                            <option value="Priya">
                                Priya
                            </option>

                        </select>

                        {errors.assignedEmployee && (

                            <span className="error">
                                {errors.assignedEmployee.message}
                            </span>

                        )}

                    </div>


                    {/* PRIORITY */}

                    <div className="form-group">

                        <label>Priority</label>

                        <select {...register("priority")}>

                            <option value="">
                                Select Priority
                            </option>

                            <option value="Low">
                                Low
                            </option>

                            <option value="Medium">
                                Medium
                            </option>

                            <option value="High">
                                High
                            </option>

                        </select>

                        {errors.priority && (

                            <span className="error">
                                {errors.priority.message}
                            </span>

                        )}

                    </div>


                    {/* DUE DATE */}

                    <div className="form-group">

                        <label>Due Date</label>

                        <input
                            type="date"
                            {...register("dueDate")}
                        />

                        {errors.dueDate && (

                            <span className="error">
                                {errors.dueDate.message}
                            </span>

                        )}

                    </div>


                    {/* TASK STATUS */}

                    <div className="form-group">

                        <label>Task Status</label>

                        <select {...register("taskStatus")}>

                            <option value="">
                                Select Status
                            </option>

                            <option value="Pending">
                                Pending
                            </option>

                            <option value="In Progress">
                                In Progress
                            </option>

                            <option value="Completed">
                                Completed
                            </option>

                        </select>

                        {errors.taskStatus && (

                            <span className="error">
                                {errors.taskStatus.message}
                            </span>

                        )}

                    </div>


                    {/* SUBMIT BUTTON */}

                    <button
                        type="submit"
                        className="create-button"
                    >

                        Create Task

                    </button>

                </form>

            </div>


            {/* DISPLAY CREATED TASKS */}

            <div className="created-tasks">

                <h2>Created Tasks</h2>

                {tasks.length === 0 ? (

                    <p>No tasks created yet.</p>

                ) : (

                    tasks.map((task) => (

                        <div className="task-item" key={task.id}>

                            <h3>{task.taskTitle}</h3>

                            <p>{task.description}</p>

                            <p>
                                Assigned Employee: {task.assignedEmployee}
                            </p>

                            <p>
                                Priority: {task.priority}
                            </p>

                            <p>
                                Due Date: {task.dueDate}
                            </p>

                            <p>
                                Status: {task.taskStatus}
                            </p>

                        </div>

                    ))

                )}

            </div>

        </div>

    );

}

export default CreateTask;