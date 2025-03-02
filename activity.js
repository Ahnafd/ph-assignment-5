document.addEventListener("DOMContentLoaded", function () {

    document.querySelectorAll("[class^='btn-']").forEach(button => {
        button.addEventListener("click", function () {
            let taskNumber = this.classList[0].split('-')[1]; 
            let taskName = document.querySelector(`.task-${taskNumber}`).innerText;

            let now = new Date();
            let hours = now.getHours().toString().padStart(2, '0');
            let minutes = now.getMinutes().toString().padStart(2, '0');
            let seconds = now.getSeconds().toString().padStart(2, '0');
            let currentTime = `${hours} :${minutes} :${seconds} ` ;
            if (confirm(`Board Updated Successfully !`)) {
                let resultContainer = document.querySelector(".result")
                let newMessage = document.createElement("h3");
                newMessage.innerText = ` You have successfully completed  "${taskName}" at ${currentTime}`;
                newMessage.style.fontWeight = 'bold' ;
                resultContainer.appendChild(newMessage);
                this.disabled = true ;
                this.style.backgroundColor = "#c0bebe" ;

                let taskAssignedCount = document.querySelector(".task-assigned-count") ;
                let currentTaskCount = parseInt(taskAssignedCount.innerText);
                taskAssignedCount.innerText = currentTaskCount - 1;


                let totalTaskCount = document.querySelector(".total-task");
                let currentTotalTaskCount = parseInt(totalTaskCount.innerText);
                totalTaskCount.innerText = currentTotalTaskCount + 1;


                if (currentTaskCount - 1 === 0) {
                    setTimeout(function () {
                        alert("Congrats! you have completed all the current task")
                    } ,500)
                }
            }
        });
    });
    document.querySelector(".btn-history").addEventListener("click" , function () {
        let resultContainer = document.querySelector(".result")
        resultContainer.innerText= "" ;
    })
});
