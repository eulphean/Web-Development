document.getElementById("click").onclick=function()
        {
            var num = document.getElementById("input").value;
            document.getElementById("result").innerHTML = parseInt(num) + 5;
        }
