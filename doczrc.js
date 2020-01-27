export default {
  title: 'Ergoplatform developers documentation',
  themeConfig: {
    initialColorMode: 'dark',
  },
  ignore: ['README.md'],
  public: '/public',
  menu: [
    "ErgoNode",
    "ErgoScript",
    "Appkit",
    "Explorer",
    "ErgoTool"
  ],
  base: '/developer-docs/',
  dest: '/docs',
  propsParser: false,
  indexHtml: 'public/index.html',
}
