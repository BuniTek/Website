import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Layout from '../components/layout';
import SEO from '../components/seo';
import BlogItem from '../components/Blog/BlogItem';
import BlogSearch from '../components/Blog/Search';
import { setLogoUrl } from '../redux/actions';

import '../assets/styles/pages/blog.scss';
import darkLogo from '../assets/images/africai.png';

const lipsum = `
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 
'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. 
Various versions have evolved over the years, sometimes by accident,
 sometimes on purpose (injected humour and the like).
`;

const Blog = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLogoUrl({ logo: darkLogo }));
  }, []);
  return (
    <Layout>
      <SEO title="Blog" />
      <div className="blog">
        <div className="blog__header">
          <h2 className="blog__heading">Blog</h2>
          <BlogSearch />
        </div>
        <BlogItem
          title="Python Encryption App"
          description={lipsum}
        />
        <BlogItem
          title="Advantage of Parcel over Webpack"
          description={lipsum}
        />
        <BlogItem
          title="Future of AfricaI"
          description={lipsum}
        />
        <BlogItem
          title="Meet JC Billy, our CEO and Founder"
          description={lipsum}
        />
      </div>

    </Layout>

  );
};

export default Blog;
