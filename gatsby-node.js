const path = require ('path')
const { createFilePath } = require("gatsby-source-filesystem");

const paginate = async ({graphql, actions, pathPrefix, component, reporter, type}) => {
  const { errors, data } = await graphql(`
     {
       allMarkdownRemark(
         filter: {
           frontmatter: {
             type: {
               eq: "${type}"
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

  console.log('PAGES', pages, totalCount, type);

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

const makePagesFromMdx = async ({graphql, actions, reporter, type}) => {
  const { createPage } = actions;

  const { error, data } = await graphql(`
  {
    allMarkdownRemark(filter: {
      frontmatter: {
        type: {
          eq: "${type}"
        }
      }
    }){
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

  const postComponent = path.resolve(__dirname, 'src/layouts/PostLayout.js');

  const contentTypes = {
    post: postComponent,
    course: postComponent,
  }

  

  data.allMarkdownRemark.nodes.forEach((node) => {
    createPage({
      path: node.fields.slug,
      component: contentTypes[type],
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
    makePagesFromMdx({ graphql, actions, reporter, type: 'post' }),
    makePagesFromMdx({ graphql, actions, reporter, type:'course' }),
    paginate({
      graphql,
      actions,
      pathPrefix: '/blog/',
      component: path.resolve('./src/pages/blog.js'),
      reporter,
      type: 'post'
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
