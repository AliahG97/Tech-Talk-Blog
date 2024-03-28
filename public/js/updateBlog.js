const formEl = document.getElementById("updateForm");
console.log(formEl)


document.getElementById('delete-btn')
    .addEventListener('click', async function(event) {
    event.preventDefault();
    // TODO: FIx the rest of the code.
    const id = parseInt(document.getElementById("blogTitle").dataset.blog_id);
    const response =  await fetch(`/api/blogs/${id}`,{
        method: "DELETE",        
        headers:{
            'Content-Type':'application/json'
        }
    });
    const data = await response.json();
})


document.getElementById('update-btn')
    .addEventListener('click',async function(event){
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



});

