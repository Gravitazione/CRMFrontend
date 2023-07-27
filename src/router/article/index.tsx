import ArticleList from '../../pages/article/ArticleList';
import ArticleCategory from '../../pages/article/ArticleCategory';

const ArticlePage = [
  {
    path: '/articlelist',
    element: <ArticleList />,
  },
  {
    path: '/articlecategory',
    element: <ArticleCategory />,
  },
];

export default ArticlePage;
