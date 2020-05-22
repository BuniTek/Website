import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Layout from '../layouts/layout';
import SEO from '../components/seo';
import NewsItem from '../components/News/NewsItem';
import Search from '../components/Search';
import { setLogoUrl } from '../redux/actions';

import '../assets/styles/pages/news.scss';
import darkLogo from '../assets/images/africai.png';


const lipsum = `
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 
'Content here...
`;

const News = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLogoUrl({ logo: darkLogo }));
  }, []);
  return (
    <Layout>
      <SEO title="News" />
      <div className="news">
        <div className="news__header">
          <h2 className="news__heading">News</h2>
          <Search />
        </div>
        <NewsItem
          title="Python Encryption App"
          description={lipsum}
        />
        <NewsItem
          title="Advantage of Parcel over Webpack"
          description={lipsum}
        />
        <NewsItem
          title="Future of AfricaI"
          description={lipsum}
        />
        <NewsItem
          title="Meet JC Billy, our CEO and Founder"
          description={lipsum}
        />
      </div>

    </Layout>

  );
};

export default News;
