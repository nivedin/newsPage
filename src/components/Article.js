function Article({ title, link, description, image, publishedAt }) {
  return (
    <article className="article">
      <a href={link}>
        <h1>{title}</h1>
        <small>{new Date(publishedAt).toUTCString()}</small>
        <img src={`http://www.nytimes.com/${image}`} alt="img" />
        <p className="description">{description}</p>
      </a>
    </article>
  );
}

export default Article;
