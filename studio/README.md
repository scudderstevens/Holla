# Sanity

## query
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
