const { mergeWith } = require('lodash/fp')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Docz Example Typescript',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: true,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: false,
        o: false,
        open: false,
        'open-browser': false,
        root: 'C:\\Users\\jan.dudek\\WebstormProjects\\docz\\doczdemo\\.docz',
        base: '/',
        source: './',
        src: './',
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Docz Example Typescript',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: 'C:\\Users\\jan.dudek\\WebstormProjects\\docz\\doczdemo',
          templates:
            'C:\\Users\\jan.dudek\\WebstormProjects\\docz\\doczdemo\\node_modules\\docz-core\\dist\\templates',
          docz: 'C:\\Users\\jan.dudek\\WebstormProjects\\docz\\doczdemo\\.docz',
          cache:
            'C:\\Users\\jan.dudek\\WebstormProjects\\docz\\doczdemo\\.docz\\.cache',
          app:
            'C:\\Users\\jan.dudek\\WebstormProjects\\docz\\doczdemo\\.docz\\app',
          appPackageJson:
            'C:\\Users\\jan.dudek\\WebstormProjects\\docz\\doczdemo\\package.json',
          gatsbyConfig:
            'C:\\Users\\jan.dudek\\WebstormProjects\\docz\\doczdemo\\gatsby-config.js',
          gatsbyBrowser:
            'C:\\Users\\jan.dudek\\WebstormProjects\\docz\\doczdemo\\gatsby-browser.js',
          gatsbyNode:
            'C:\\Users\\jan.dudek\\WebstormProjects\\docz\\doczdemo\\gatsby-node.js',
          gatsbySSR:
            'C:\\Users\\jan.dudek\\WebstormProjects\\docz\\doczdemo\\gatsby-ssr.js',
          importsJs:
            'C:\\Users\\jan.dudek\\WebstormProjects\\docz\\doczdemo\\.docz\\app\\imports.js',
          rootJs:
            'C:\\Users\\jan.dudek\\WebstormProjects\\docz\\doczdemo\\.docz\\app\\root.jsx',
          indexJs:
            'C:\\Users\\jan.dudek\\WebstormProjects\\docz\\doczdemo\\.docz\\app\\index.jsx',
          indexHtml:
            'C:\\Users\\jan.dudek\\WebstormProjects\\docz\\doczdemo\\.docz\\app\\index.html',
          db:
            'C:\\Users\\jan.dudek\\WebstormProjects\\docz\\doczdemo\\.docz\\app\\db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
