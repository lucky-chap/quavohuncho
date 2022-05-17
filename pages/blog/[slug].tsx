import { PageType } from '@/lib/types';
import { Container } from 'layouts/Container';


const ArticlePage = () => {

  return (
    <Container
      title={`Some Title - Obed Boakye Danquah`}
      description={"summary"}
      imageUrl={"socialImageConf"}
      date={new Date().toISOString()}
      type={PageType.ARTICLE}
      sponsoredArticle={null}
      sponsoredUrl={"sponsoredArticleUrl"}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8">
        I love football
      </div>
    </Container>
  );
};


export default ArticlePage;
