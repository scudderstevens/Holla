# Sanity

React Icons [list](https://react-icons.github.io/react-icons/icons?name=ri)


## query

- **groq** queries,   [cheat sheet](https://www.sanity.io/docs/query-cheat-sheet)
- **groq** operators, [docs](https://www.sanity.io/docs/groq-operators)
- **groc** functions, [docs](https://www.sanity.io/docs/groq-functions)

```
*[ _type=="route"]{
  'path': path.current,
  'target': *[ _type == ^.target->_type && _id == ^.target->_id][0]{
  		'id': _id,
  		'type': _type,
  		'title': name,
    	'pageTitle': openGraph.title.current,
  		'slug': slug.current,
  		'descShort': descShort,
  		'descLong': openGraph.description.current,
  		'author': author->{
  			'name': name,
        'path': *[ _type == "route" && references(^._id) ][0]{'current': path.current},
			},
			'category': category->{
        'name': name,
        'path': *[ _type == "route" && references(^._id) ][0]{'current': path.current},
      },
      'tags': tag,
			'design': components,
   }
}
```

## Portable Text

- Sanity, Block Content to HTML [docs](https://github.com/sanity-io/block-content-to-html)
- Reference Materials [git](https://github.com/Universal-Health-Services/campaign-pages/blob/master/web/campaigns/utils/getActive.js)
