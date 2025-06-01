let search = document.querySelector(".search-icon");
let add = document.querySelector(".add-btn");
let tick = document.querySelector(".tick");
let tasklist2 = document.querySelector(".task-list2");
let tasklist1 = document.querySelector(".tasks-list");
let mainlist = document.querySelector(".main-list"); 
let clearbtn = document.querySelector(".clear-btn");
let font = document.querySelector(".montserrat-");
let input1_val ;
let input2_val;


let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

tasks.forEach(element => {
        let tasktext = document.createElement("p");
        tasktext.textContent = element.task;
        tasktext.classList.add("montserrat-")
        let tickIcon;
        let del;
        let edit;
        del = document.createElement("button");
        edit = document.createElement("button");
        let taskslist = document.createElement("div");
        taskslist.classList.add("tasks-list");
        del.textContent = "Delete";
        edit.textContent = "Edit";
        tickIcon = document.createElement("i");
        tickIcon.classList.add("fas", "fa-check", "tick");
        mainlist.appendChild(taskslist);
        taskslist.appendChild(tickIcon);
        taskslist.appendChild(tasktext);
        taskslist.appendChild(del);
        taskslist.appendChild(edit);
        taskslist.classList.remove("tasklist2");

        if (element.status === "true") {
            tasktext.style.textDecoration = "line-through";}

        del.addEventListener("click",()=>{
            let parent = del.parentElement;
            let index = tasks.findIndex(e => e.ID === element.ID);
            parent.remove();
            tasks.splice(index, 1);
            localStorage.setItem("tasks", JSON.stringify(tasks));
        })

        tickIcon.addEventListener("click", ()=>{
            tasktext.style.textDecoration = "line-through";
            element.status = "true"
            localStorage.setItem("tasks", JSON.stringify(tasks));

        })

        edit.addEventListener("click", () => {
                    let updated = prompt("Edit your task:", element.task);
                    if (updated) {
                        tasktext.textContent = updated;
                        let index = tasks.findIndex(e => e.ID === element.ID);
                        tasks[index].task = updated;
                        localStorage.setItem("tasks", JSON.stringify(tasks));
                    }
        });
});

let id = tasks.length > 0 ? Math.max(...tasks.map(t => t.ID)) + 1 : 1;

add.addEventListener("click",()=>{
    let input2 = document.querySelector(".input2");
    input2_val = input2.value;
    if (!input2_val ) {
        alert("Enter task!");
    } else {
        tasks.push({task:input2_val, status:"false", ID: id});
        let currentId = id;
        id++;
        let tasktext = document.createElement("p");
        tasktext.textContent = input2_val;
        tasktext.classList.add("montserrat-");
        let tickIcon;
        let del;
        let edit;
        del = document.createElement("button");
        edit = document.createElement("button");
        let taskslist = document.createElement("div");
        taskslist.classList.add("tasks-list");
        del.textContent = "Delete";
        edit.textContent = "Edit";
        tickIcon = document.createElement("i");
        tickIcon.classList.add("fas", "fa-check", "tick");
        mainlist.appendChild(taskslist);
        taskslist.appendChild(tickIcon);
        taskslist.appendChild(tasktext);
        taskslist.appendChild(del);
        taskslist.appendChild(edit);
        taskslist.classList.remove("tasklist2");        

        del.addEventListener("click",()=>{
            let index = tasks.findIndex(element => element.ID === currentId);
            let parent = del.parentElement;
            parent.remove();
            tasks.splice(index, 1);
            localStorage.setItem("tasks", JSON.stringify(tasks));
        })


        tickIcon.addEventListener("click", ()=>{
            let index = tasks.findIndex(element => element.ID === currentId);
            tasktext.style.textDecoration = "line-through";
            tasks[index].status = "true";
            localStorage.setItem("tasks", JSON.stringify(tasks));
        })

        edit.addEventListener("click", () => {
                    let updated = prompt("Edit your task:", element.task);
                    if (updated) {
                        tasktext.textContent = updated;
                        let index = tasks.findIndex(e => e.ID === element.ID);
                        tasks[index].task = updated;
                        localStorage.setItem("tasks", JSON.stringify(tasks));
                    }
        });

        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
    
})



clearbtn.addEventListener("click", ()=>{
    localStorage.removeItem("tasks");
    location.reload();
})



search.addEventListener("click",()=>{
    let input1 = document.querySelector(".input1");
    input1_val = input1.value.trim().toLowerCase();
    if (input1_val === "") {
        alert("Please enter a task! ");
    } else {
        mainlist.innerHTML = " ";
        let index = tasks.findIndex(e => e.task === input1_val);
        console.log(tasks[index]);
        tasks.forEach(element =>{
            if (element.task === input1_val) {
                let tasktext = document.createElement("p");
                tasktext.textContent = input1_val;
                tasktext.classList.add("montserrat-");
                let tickIcon;
                let del;
                let edit;
                del = document.createElement("button");
                edit = document.createElement("button");
                let taskslist = document.createElement("div");
                taskslist.classList.add("tasks-list");
                del.textContent = "Delete";
                edit.textContent = "Edit";
                tickIcon = document.createElement("i");
                tickIcon.classList.add("fas", "fa-check", "tick");
                mainlist.appendChild(taskslist);
                taskslist.appendChild(tickIcon);
                taskslist.appendChild(tasktext);
                taskslist.appendChild(del);
                taskslist.appendChild(edit);
                taskslist.classList.remove("tasklist2");

                if (element.status === "true") {
                    tasktext.style.textDecoration = "line-through";
                }


        del.addEventListener("click",()=>{
            let index = tasks.findIndex(e => e.ID === element.ID);
            let parent = del.parentElement;
            parent.remove();
            tasks.splice(index, 1);
            localStorage.setItem("tasks", JSON.stringify(tasks));
        })


        tickIcon.addEventListener("click", ()=>{
            let index = tasks.findIndex(e => e.ID === element.ID);
            tasktext.style.textDecoration = "line-through";
            tasks[index].status = "true";
            localStorage.setItem("tasks", JSON.stringify(tasks));
        })

        edit.addEventListener("click", () => {
                    let updated = prompt("Edit your task:", element.task);
                    if (updated) {
                        tasktext.textContent = updated;
                        let index = tasks.findIndex(e => e.ID === element.ID);
                        tasks[index].task = updated;
                        localStorage.setItem("tasks", JSON.stringify(tasks));
                    }
        });
                localStorage.setItem("tasks", JSON.stringify(tasks));

            }
        })
        

    }
    
})




