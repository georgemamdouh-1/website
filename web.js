let username;


document.getElementById("button1").onclick = function () {
    username = document.getElementById("name").value;
    document.getElementById("h12").textContent = "Hello " + username + " you are offically an astronaut!🚀 ";
};