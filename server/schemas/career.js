export default {
    name: 'career',
    title: 'Career',
    type: 'document',
    fields: [
        {
            name: 'type',
            title: 'Type',
            type: 'string',
            options: {
                list: [
                    { title: 'Education', value: 'education' },
                    { title: 'Experience', value: 'experience' },
                    { title: 'Certificate', value: 'certificate' },
                ],
                layout: 'radio',
            },
        },
        {
            name: 'title',
            title: 'Title',
            type: 'object',
            fields: [
                {
                    name: 'en',
                    title: 'English',
                    type: 'string',
                },
            ],
        },
        {
            name: 'skills',
            title: 'Skills',
            type: 'array',
            of: [
              {
                type: 'string',
              },
            ],
            options: {
              layout: 'tags',
            },
          },
          
        {
            name: 'start_date',
            title: 'Start Date',
            type: 'string'
        },
        {
            name: 'end_date',
            title: 'End Date',
            type: 'string'
        },
        {
            name: 'image',
            title: 'Image',
            type: 'string'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'object',
            fields: [
                {
                    name: 'en',
                    title: 'English',
                    type: 'text',
                },
            ],
        },
    ]
}