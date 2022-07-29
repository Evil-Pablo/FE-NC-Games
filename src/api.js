export function deleteItem(comment_id) {
  axios.delete(
    `'https://nc-news-example-1.herokuapp.com/api/comments'${comment_id}`
  );
}
