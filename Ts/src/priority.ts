type priority= "low" | "medium" | "high" | "critical";
function getPriorityLevel(priority:priority){
  switch(priority){
    case "low":
      return 0;
    case "medium":
      return 1;
    case "high":
      return 2;
    case "critical":
      return 3;
    default:
      return 0;  
  }
}