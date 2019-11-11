const { override, fixBabelImports, addWebpackAlias, addBabelPlugins } = require('customize-cra')
const path = require('path')


module.exports = override(
  ...addBabelPlugins(
    [
      "@babel/plugin-proposal-decorators",
      {
        "legacy": true
      }
    ]
  ),
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'css',
  }),
  addWebpackAlias({
    //静态资源
    ['assets']: path.resolve(__dirname, 'src/assets/'),
    ['fonts']: path.resolve(__dirname, 'src/assets/fonts/'),
    ['images']: path.resolve(__dirname, 'src/assets/images/'),
    ['json']: path.resolve(__dirname, 'src/assets/json/'),
    ['styles']: path.resolve(__dirname, 'src/assets/styles/'),
    // 模块
    ['article']: path.resolve(__dirname, 'src/views/article/'),
    ['community']: path.resolve(__dirname, 'src/views/community/'),
    ['plan']: path.resolve(__dirname, 'src/views/plan/'),
    ['profile']: path.resolve(__dirname, 'src/views/profile/'),
    ['sport']: path.resolve(__dirname, 'src/views/sport/'),
    //公共组件
    ['components']: path.resolve(__dirname, 'src/components/'),
    ['hoc']: path.resolve(__dirname, 'src/components/hoc/'),
    ['layout']: path.resolve(__dirname, 'src/components/layout/'),
    ['styled']: path.resolve(__dirname, 'src/components/styled/'),
    // 公共组件 ui
    ['ui']: path.resolve(__dirname, 'src/components/ui/'),
    
    //状态树
    ['store']: path.resolve(__dirname, 'src/store/'),

    //工具方法
    ['utils']: path.resolve(__dirname, 'src/utils/'),
    //ajax
    ['http']: path.resolve(__dirname, 'src/tools/http/'),

  })
)