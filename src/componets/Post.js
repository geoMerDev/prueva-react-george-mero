import React, { useEffect, useState } from 'react';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, []);

  const addToFavorites = (post) => {
    const postExists = favorites.find((p) => p.id === post.id);

    if (!postExists) {
      const updatedFavorites = [...favorites, post];
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      setFavorites(updatedFavorites);
      alert('post agregado a favoritos');
    } else {
      alert('Este post ya está en tus favoritos');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Posts</h2>
      {isLoading ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Título</th>
              <th>Contenido</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => addToFavorites(post)}
                  >
                    Agregar a destacados
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <h2>Destacados</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Título</th>
          </tr>
        </thead>
        <tbody>
          {favorites.map((post) => (
            <tr key={post.id}>
              <td>{post.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Posts;
