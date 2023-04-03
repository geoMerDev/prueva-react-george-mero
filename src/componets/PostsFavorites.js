import { useState, useEffect } from 'react';

const PostsFavorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favoritesFromStorage = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(favoritesFromStorage);
  }, []);

  const removeFromFavorites = (post) => {
    const updatedFavorites = favorites.filter((p) => p.id !== post.id);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    setFavorites(updatedFavorites);
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Posts Destacados</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Título</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {favorites.map((post) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => removeFromFavorites(post)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PostsFavorites;
