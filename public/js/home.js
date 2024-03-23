const addCommentBtns = document.getElementsByClassName('addComment');
console.log(addCommentBtns);
for(let i = 0; i < addCommentBtns.length; i++){
    addCommentBtns[i].addEventListener('click', function(event){
        const postId = event.target.getAttribute('data-postId');

        const content = event.target.previousElementSibling.previousElementSibling.value;
        fetch(`/api/comment/${postId}`, {
            method:'POST',
            body:JSON.stringify({
                postId,
                content
            }),
            headers:{
                "Content-Type":"application/json"
            }
        })
            .then(response => response.json())
            .then(comments => {
                console.log(comments);
            })
            .catch(error => console.error('Error fetching comments:', error));
      

        
    })
    
}
