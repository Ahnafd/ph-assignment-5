const today = new Date();
const options = {month : "short", day : "numeric" , year :"numeric"}
const formattedDate = today.toLocaleDateString("en-US" , options) ;

document.getElementById('currentDate').textContent = formattedDate ;