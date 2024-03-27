const formEl = document.getElementById("updateForm");
console.log(formEl)




formEl.addEventListener("submit",async function(event){
    event.preventDefault();
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;
    const id = parseInt(document.getElementById("blogTitle").dataset.blog_id);
    console.log(title, content)
    console.log(id)

    if(title && content){
        const response =  await fetch('/api/blogs/',{
            method: "PUT",
            body: JSON.stringify({title,content,id}),
            headers:{
                'Content-Type':'application/json'
            }
        })

        console.log(response)
        console.log(response.ok)
    }else{
        alert("Fields cannot me empty")
    }



})