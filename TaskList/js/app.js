document.addEventListener("DOMContentLoaded", function () { //załadowanie DOM

//deklaracja zmiennych
	var taskInput = document.querySelector("#taskInput");
	var addTaskBtn = document.querySelector("#addTaskBtn");
	var taskList = document.querySelector("ul#taskList");
	var removingTasksBtn = document.querySelector("#removeFinishedTasksBtn");
	var counterContainer = document.querySelector("h3#counterContainer");
	var counter = counterContainer.firstElementChild;
	var clickCount = 0;
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
			var newTask = document.createElement("li");
			taskList.append(newTask);
			var newTaskTitle = document.createElement("h2");
			newTask.append(newTaskTitle);
			newTaskTitle.innerText = newTaskValue;
			taskInput.value ="";

			var completeTaskButton = document.createElement("button");
			completeTaskButton.innerText ="complete";
			newTask.append(completeTaskButton);

			var deleteTaskButton = document.createElement("button");
			deleteTaskButton.innerText ="delete";
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
		var allTasks = taskList.querySelectorAll("li");
		var completedTasks = taskList.querySelectorAll("li.complete");
		var tasksToDo = allTasks.length - completedTasks.length;
		counter.innerText = tasksToDo + " left";
	}

//pokazanie licznika 
	function showCounter() {
		counterContainer.classList.remove("invisible");
		clickCount ++;
		if(clickCount>1){
			event.target.removeEventListener("click", showCounter);
		}
	}

});









