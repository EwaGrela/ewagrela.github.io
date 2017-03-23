document.addEventListener("DOMContentLoaded", function () { //załadowanie DOM

//deklaracja zmiennych
	var taskInput = document.querySelector("#taskInput");
	var addTaskBtn = document.querySelector("#addTaskBtn");
	var taskLists = document.querySelectorAll("ul.taskList");
	console.log(taskLists);
	console.log(taskLists[0], taskLists[1], taskLists[2]);
	var taskList1 = taskLists[0];
	var taskList2 = taskLists[1];
	var taskList3 = taskLists[2];
	var removingTasksBtn = document.querySelector("#removeFinishedTasksBtn");
	var counterContainer = document.querySelector("h2#counterContainer");
	var counter = counterContainer.firstElementChild;
	var clickCount = 0;
	var priorityInput = document.querySelector("input#priorityInput");
	
	function addTask() { /* funckja dodająca zadanie, jeżeli spełnia określone warunki*/
		var newTaskValue = taskInput.value
		if( newTaskValue.length>5 && newTaskValue.length <100){
			createTask();
			countTasksToDo(); /* tu sprawdzamy, ile nam jeszczezadań pozostało*/
		} else {
			taskInput.value ="";
			return false;
		}
		function createTask(){ /* funkcja tworząca zadanie*/
			function checkPriority() {
				var priority = priorityInput.value;
				if(priority>=1 && priority<4){
					taskList1.append(newTask);
				}
				if(priority>=4 && priority<8){
					taskList2.append(newTask);
				}
				if(priority>=8 && priority<=10){
					taskList3.append(newTask);
				}
			}
			var newTask = document.createElement("li");
			checkPriority();
			var newTaskTitle = document.createElement("h4");
			newTask.append(newTaskTitle);
			newTaskTitle.innerText = newTaskValue;
			taskInput.value ="";
			priorityInput.value ="";

			var completeTaskButton = document.createElement("button");
			completeTaskButton.innerText ="ok";
			newTask.append(completeTaskButton);

			var deleteTaskButton = document.createElement("button");
			deleteTaskButton.innerText ="del";
			newTask.append(deleteTaskButton);

			completeTaskButton.addEventListener("click", function(){
				newTask.classList.toggle("complete");
				countTasksToDo(); /* tu sprawdzamy, ile nam jeszczezadań pozostało na bieżąco */
			})

			deleteTaskButton.addEventListener("click", function(){
				newTask.parentNode.removeChild(newTask);
				countTasksToDo(); /* tu sprawdzamy, ile nam jeszczezadań pozostało* na bieżąco */
			})
			
		}
		
	}
	//dodajemy zadania, gdy sprawdzimy, czy można
	addTaskBtn.addEventListener("click", addTask);
	addTaskBtn.addEventListener("click", showCounter);
	
	removingTasksBtn.addEventListener("click", function(event){
		var completedTasks = document.querySelectorAll(".complete");
		console.log(completedTasks);
		for( var i = 0; i<completedTasks.length; i ++){
			completedTasks[i].parentNode.removeChild(completedTasks[i]);
		}
	});

	//liczenie zadań, które zostały
	function countTasksToDo(){
		var allTasks = document.querySelectorAll("li");
		var completedTasks = document.querySelectorAll("li.complete");
		var tasksToDo = allTasks.length - completedTasks.length;
		counter.innerText = tasksToDo;
	}

//pokazanie licznika 
	function showCounter(event) {
		counterContainer.classList.remove("invisible");
		clickCount ++;
		if(clickCount>1){
			event.target.removeEventListener("click", showCounter);
		}
	}

});









