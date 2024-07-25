const counter_value = document.getElementById("countLabel");

        const decrease_by_amount = document.getElementById("button_decreasebyamount");
        const decrease = document.getElementById("button_decrease");
        const reset = document.getElementById("button_reset");
        const increase = document.getElementById("button_increase");
        const increase_by_amount = document.getElementById("button_increasebyamount");

        const change_amount = document.getElementById("amount");
        const confirm_button = document.getElementById("confirm_amount");

        let count = 0

        confirm_button.onclick = function(){
            window.alert(`Your change amount has been reset to ${change_amount.value}`)
        }

        decrease_by_amount.onclick = function(){
            count -= Number(change_amount.value);
            counter_value.textContent = count;
        }
        increase_by_amount.onclick = function(){
            count += Number(change_amount.value);
            counter_value.textContent = count;
        }

        decrease.onclick = function(){
            count --;
            counter_value.textContent = count;
        }

        increase.onclick = function(){
            count ++;
            counter_value.textContent = count;
        }

        reset.onclick = function(){
            count = 0;
            counter_value.textContent = count;
        }
        
        const display = document.getElementById("time");
        let timer = null;
        let start_time = 0;
        let running_time = 0;
        let isRunning = false;
        let log_count = 1;



        function starttimer(){
            if (!isRunning){
                start_time = Date.now() - running_time;
                timer = setInterval(update, 10);
                isRunning = true;
            }


        }
        
        function stoptimer(){

            if (isRunning){
                clearInterval(timer);
                running_time = Date.now() - start_time;
                isRunning = false;
            }


        }

        function resettimer(){
            clearInterval(timer);
            start_time = 0;
            running_time = 0;
            isRunning = false;

            switch(log_count){
                case 1:
                    const LOG_1 = document.getElementById("log1");
                    LOG_1.textContent = display.textContent;
                    break;
                case 2:
                    const LOG_2 = document.getElementById("log2");
                    LOG_2.textContent = display.textContent;
                    break;
                case 3:
                    const LOG_3 = document.getElementById("log3");
                    LOG_3.textContent = display.textContent;
                    break;
                case 4:
                    const LOG_4 = document.getElementById("log4");
                    LOG_4.textContent = display.textContent;
                    log_count = 0;
                    break;
            }
            log_count ++;
            display.textContent = "00:00:00";


        }

        function update(){
            const current_time = Date.now();
            running_time = current_time - start_time;

            let hours = Math.floor(running_time /(1000 * 60 * 60));
            let minutes = Math.floor(running_time / (1000 * 60) % 60);
            let seconds = Math.floor(running_time / 1000 % 60)

            hours = String(hours).padStart(2, "0");
            minutes = String(minutes).padStart(2, "0");
            seconds = String(seconds).padStart(2, "0");

            display.textContent = `${hours}:${minutes}:${seconds}`;


        }