function fetchUser(userId, callBack) {
  setTimeout(() => {
    console.log("user fetched successfully", userId);
    callBack(userId);
  }, 1000);
}

function fetchPost(userId, callBack) {
  setTimeout(() => {
    console.log("post fetch successfully");
    callBack(1);
  });
}

function fetchComments(postId, callBack) {
  setTimeout(() => {
    console.log("comment fetch successfully");
    callBack("comment");
  });
}

fetchUser(1, (user) => {
  fetchPost(user.id, (post) => {
    fetchComments(post.id,(comment)=>{
        console.log('comment on the first post is :' , comment) ;
    })
  });
});
