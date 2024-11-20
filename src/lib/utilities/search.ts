import FlexSearch from 'flexsearch'

let postsIndex: FlexSearch.Index
let posts: Post[]

export function createPostsIndex(data: Post[]) {
  // create the posts index
	postsIndex = new FlexSearch.Index({ tokenize: 'forward' })

	data.forEach((post, i) => {
		let meta = post.meta
    // index the title and content together
		const item = `${meta.title} ${meta.description}`
    // add the item to the index
		postsIndex.add(i, item)
	})

	posts = data
}

export function searchPostsIndex(searchTerm: string) {
  // escape special regex characters
	const match = searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  // return matching post indexes
	const results = postsIndex.search(match)

	return results
    // filter the posts based on the matched index
		.map((index) => posts[index as number])
    // you can do whatever you want at this point
}
