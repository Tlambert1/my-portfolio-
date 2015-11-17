function convert(temp) {
    if (temp == "C") {
        F = document.getElementById("C").value * 9 / 5 + 32;
        document.getElementById("F").value = Math.round(F);
    } 
    else	{
        C = (document.getElementById("F").value -32) * 5 / 9;
        document.getElementById("C").value = Math.round(C);
    }
};

