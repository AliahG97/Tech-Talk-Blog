const addCommentBtns = document.getElementsByClassName('addComment');
console.log(addCommentBtns);
for(let i =0; i < addCommentBtns.length; i++){
    addCommentBtns[i].addEventListener('click', function(){
        const postId = addCommentBtns[i].dataset.postId;

        fetch(`/comment/${postId}`)
            .then(response => response.json())
            .then(comments => {
                console.log(comments);
            })
            .catch(error => console.error('Error fetching comments:', error));
      

        
    })
    
}
