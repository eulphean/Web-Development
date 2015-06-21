 function setbg(color, tag)
        {
            $("#"+tag).css("background", color);
        }
        // tooltip for HTML, CSS, JS, and Result
        $(document).tooltip();

        // We need to set the height of the codeContainer equal to the height of the window - height of title bar
        var windowHeight = $(window).height();
        var menubarHeight = $("#menubar").height();
        var codeContainerHeight = windowHeight - menubarHeight;

        $(".codeContainer").height(codeContainerHeight+"px");

        $(".toggle").click(function()
        {
            $(this).toggleClass("selected");

            // gets the active div
            var activeDiv = $(this).html();

            $("#"+activeDiv+"Container").toggle();

            // filter all the 
            var showingDivs=$(".codeContainer").filter(function(){

                return($(this).css("display")!="none");
            
            }).length;

            var width = 100/showingDivs;

            $(".codeContainer").css("width", width+"%");

        });

        // what happens when the run the button runs
        $("#run").click(function(){

            $("iframe").contents().find("html").html('<style>'+$("#cssCode").val()+'</style>'+$("#htmlCode").val());

            // Evaluates the javascript sitting in jsCode but that's still
            // not running javascript from inside the iframe
            // eval ($("#jsCode").val());
            document.getElementById("resultFrame").contentWindow.eval($("#jsCode").val());
        })