import {blockContent} from './schemaTypes/blockContent'
import {category} from './schemaTypes/category'
import {post} from './schemaTypes/post'
import {author} from './schemaTypes/author'
import {blog} from './schemaTypes/blog'
import {image} from './schemaTypes/image'
import {gallery} from './schemaTypes/gallery'

export const schema = {
  types: [post, author, category, blockContent, blog, image, gallery],
}
