import Post from "./Post";

function Posts() {
  const posts = [
    {
      id: "123",
      username: "Alice",
      userImg: "https://links.papareact.com/3ke",
      img: "https://images.unsplash.com/photo-1634036711634-ba0b742534e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
      caption: "This is awesome",
    },
    {
      id: "234",
      username: "Bob",
      userImg: "https://links.papareact.com/3ke",
      img: "https://images.unsplash.com/photo-1633421878789-30435a5f7ea8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
      caption: "Wow this is DOPE!...",
    },
  ];
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}

export default Posts;
