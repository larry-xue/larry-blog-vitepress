// posts.data.js
import { createContentLoader } from 'vitepress'

export default createContentLoader('/posts/*.md', {
  transform: (rawData) => {
    return rawData.sort((a, b) => {
      return +new Date(b.frontmatter.date) - +new Date(a.frontmatter.date)
    })
    .filter((page) => {
      return page.url.endsWith('.html')
    })
    .map((page) => {
      return {
        title: page.frontmatter.title,
        description: page.frontmatter.description,
        date: page.frontmatter.date,
        url: page.url
      }
    })
  }
})