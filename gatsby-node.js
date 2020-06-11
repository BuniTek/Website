const path = require ('path')
const { createFilePath } = require("gatsby-source-filesystem");

const paginate = async ({graphql, actions, pathPrefix, component, reporter, category}) => {
  const { errors, data } = await graphql(`
     {
       allMarkdownRemark(
         filter: {
           frontmatter: {
             category: {
               eq: "${category}"
             }
           }
         }
       ) {
         totalCount
       }
     }
  `);

  if (errors) {
    reporter.panicOnBuild('Error while running a GraphQL query!');
    return;
  }

  const { totalCount } = data.allMarkdownRemark;

  const pages = Math.ceil(totalCount / 10);

  console.log('PAGES', pages, totalCount);

  Array.from({ length: pages }).forEach((_, i) => {
    actions.createPage({
      path: `${pathPrefix}${i+1}`,
      component,
      context: {
        skip: i * 10,
        currentPage: i + 1,
      }
    })
  })
}

const makePostsFromMdx = async ({graphql, actions, reporter}) => {
  const { createPage } = actions;

  const { error, data } = await graphql(`
  {
    allMarkdownRemark{
      nodes {
        fields {
          slug
        }
      }
    }
  }
  `);

  if (error) {
    reporter.panicOnBuild('There was an error while running a GraphQL query');
    return;
  }

  data.allMarkdownRemark.nodes.forEach((node) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve('./src/layouts/PostLayout.js'),
      context: {
        slug: node.fields.slug
      }
    });
  });
}

exports.onCreateNode = ({node, getNode, actions}) => {
    const { createNodeField } = actions;

    if(node.internal.type === "MarkdownRemark"){
        const slug = createFilePath({node, getNode, basePath: "posts"});
        createNodeField({
            node,
            name: "slug",
            value: slug
        });
    }
}

exports.createPages = async ({ graphql, actions, reporter}) => {  
  return Promise.all([
    makePostsFromMdx({ graphql, actions, reporter }),
    paginate({
      graphql,
      actions,
      pathPrefix: '/blog/',
      component: path.resolve('./src/pages/blog.js'),
      reporter,
      category: 'posts'
    }),
  ]);
}


exports.createSchemaCustomization = ({ actions }) => {
  actions.createTypes(`
    type MarkdownRemark implements Node @infer {
      frontmatter: MarkdownRemarkFrontmatter!
    }

    type MarkdownRemarkFrontmatter @infer {
      date: Date @dateformat
    }
  `);
};
