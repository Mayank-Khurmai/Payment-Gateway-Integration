function pay_in()
{
    var x = document.getElementById("btn-primary");
    var y = document.getElementById("btn-secondary");
    x.style.display = "none";
    y.style.display = "block";
}

function pay_out()
{
    var x = document.getElementById("btn-primary");
    var y = document.getElementById("btn-secondary");
    x.style.display = "block";
    y.style.display = "none";
}