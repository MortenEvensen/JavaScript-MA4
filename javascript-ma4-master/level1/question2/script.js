//I made 4 TODO cards as 4 seperate lists

fetch("https://jsonplaceholder.typicode.com/todos")
    .then(result => result.json())
    .then((res) => {
    createTodo(res);
})
.catch(error => console.log(error))

function createTodo(result){
    var card1 = document.getElementById("todoCard1");
    var card2 = document.getElementById("todoCard2");
    var card3 = document.getElementById("todoCard3");
    var card4 = document.getElementById("todoCard4");
    
    //Todocard 1
    card1.innerHTML += "<li>User ID: " + result[0].userId + "</li>";
   card1.innerHTML += "<li>ID: " + result[0].id + "</li>";
    card1.innerHTML += "<li>Title: " + result[0].title + "</li>";
    card1.innerHTML += "<li>Completed: " + result[0].completed + "</li>";
    
    //Todocard 2
     card2.innerHTML += "<li>User ID: " + result[1].userId + "</li>";
   card2.innerHTML += "<li>ID: " + result[1].id + "</li>";
    card2.innerHTML += "<li>Title: " + result[1].title + "</li>";
    card2.innerHTML += "<li>Completed: " + result[1].completed + "</li>";
    
    //Todocard 3
    card3.innerHTML += "<li>User ID: " + result[2].userId + "</li>";
   card3.innerHTML += "<li>ID: " + result[2].id + "</li>";
    card3.innerHTML += "<li>Title: " + result[2].title + "</li>";
    card3.innerHTML += "<li>Completed: " + result[2].completed + "</li>";
    
    //Todocard 4
    card4.innerHTML += "<li>User ID: " + result[3].userId + "</li>";
   card4.innerHTML += "<li>ID: " + result[3].id + "</li>";
    card4.innerHTML += "<li>Title: " + result[3].title + "</li>";
    card4.innerHTML += "<li>Completed: " + result[3].completed + "</li>";
} 