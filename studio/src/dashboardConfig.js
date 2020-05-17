export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ec07f1358e878730f4bb0a3',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-studio-xa5oosiw',
                  apiId: '4142cb3f-c755-4944-a5f2-ea9238a9b7cf'
                },
                {
                  buildHookId: '5ec07f1368f986d7fa01f992',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-web-tdk9s25d',
                  apiId: '606d5d56-b35c-4cc8-9646-207cf1be1636'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/iamthenewking/sanity-gatsby',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-web-tdk9s25d.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
