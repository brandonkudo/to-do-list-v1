// function toDoItem(count, longname)  {
//   this.count = count;
//   this.longname = longname;
//
// }





var tasksArray = [];
// var count = 0;

// function Task(name, description) {
//   this.name = name;
//   this.description = description;
//
// }





$(document).ready(function() {
 $("form#newTasks").submit(function(event) {
  event.preventDefault();
  var newTasksVal = $("#task").val();
  var
  // var newTask = '<input type="checkbox" name="oldTasksBox" value="' + $("#task").val() + '">' + '$("#task").val()';
  tasksArray.push('<input type="checkbox" name="oldTasksBox" value="' + $("#task").val() + '">' + newTasksVal + '<br>');
  $("#oldTasksList").text("");
  $("#oldTasksList").append(tasksArray);
  // count++;
  // clear form if needed //
 });
 $("form#oldTasks").submit(function(event) {
   event.preventDefault();
   $("input:checkbox[name=oldTasksBox]:checked").each(function() {
    //  tasksArray.findIndex(function(){

    });


   });
 });
