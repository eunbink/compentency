INSERT INTO books (imgurl, imgpreview, title, author, genre, description )
VALUES ($1, $2, $3, $4, $5, $6)
returning *;