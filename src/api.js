// export function deleteItem(comment_id) {
//   axios.delete(
//     `'https://nc-news-example-1.herokuapp.com/api/comments'${comment_id}`
//   );
// }

export function getUsers() {
  return fetch(`https://nc-news-example-1.herokuapp.com/api/users/tickle122`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      return data.users;
    });
}
