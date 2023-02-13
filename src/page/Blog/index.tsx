import { Header } from '../../components/Header'
import { Post } from './components/Post'
import { Profile } from './components/Profile'
import { SearchForm } from './components/SearchForm'

import { BlogContainer, BlogContent, BlogPosts } from './styles'

const posts = [
  {
    id: 1,
    title: 'JavaScript data types and data structures',
    description: `Programming languages all have built-in data structures, but these often
    differ from one language to another. This article attempts to list the
    built-in data structures available in JavaScript and what properties
    they have. These can be used to build other data structures. Wherever
    possible, comparisons with other languages are drawn. Dynamic typing
    JavaScript is a loosely typed and dynamic language. Variables in
    JavaScript are not directly associated with any particular value type,
    and any variable can be assigned (and re-assigned) values of all types:
    let foo = 42; // foo is now a number foo = bar; // foo is now a string
    foo = true; // foo is now a boolean`,
    createdAt: new Date('2023-02-12'),
  },
  {
    id: 2,
    title: 'JavaScript data types and data structures',
    description: `Programming languages all have built-in data structures, but these often
    differ from one language to another. This article attempts to list the
    built-in data structures available in JavaScript and what properties
    they have. These can be used to build other data structures. Wherever
    possible, comparisons with other languages are drawn. Dynamic typing
    JavaScript is a loosely typed and dynamic language. Variables in
    JavaScript are not directly associated with any particular value type,
    and any variable can be assigned (and re-assigned) values of all types:
    let foo = 42; // foo is now a number foo = bar; // foo is now a string
    foo = true; // foo is now a boolean`,
    createdAt: new Date('2023-02-12'),
  },
  {
    id: 3,
    title: 'JavaScript data types and data structures',
    description: `Programming languages all have built-in data structures, but these often
    differ from one language to another. This article attempts to list the
    built-in data structures available in JavaScript and what properties
    they have. These can be used to build other data structures. Wherever
    possible, comparisons with other languages are drawn. Dynamic typing
    JavaScript is a loosely typed and dynamic language. Variables in
    JavaScript are not directly associated with any particular value type,
    and any variable can be assigned (and re-assigned) values of all types:
    let foo = 42; // foo is now a number foo = bar; // foo is now a string
    foo = true; // foo is now a boolean`,
    createdAt: new Date('2023-02-12'),
  },
  {
    id: 4,
    title: 'JavaScript data types and data structures',
    description: `Programming languages all have built-in data structures, but these often
    differ from one language to another. This article attempts to list the
    built-in data structures available in JavaScript and what properties
    they have. These can be used to build other data structures. Wherever
    possible, comparisons with other languages are drawn. Dynamic typing
    JavaScript is a loosely typed and dynamic language. Variables in
    JavaScript are not directly associated with any particular value type,
    and any variable can be assigned (and re-assigned) values of all types:
    let foo = 42; // foo is now a number foo = bar; // foo is now a string
    foo = true; // foo is now a boolean`,
    createdAt: new Date('2023-02-12'),
  },
  {
    id: 5,
    title: 'JavaScript data types and data structures',
    description: `Programming languages all have built-in data structures, but these often
    differ from one language to another. This article attempts to list the
    built-in data structures available in JavaScript and what properties
    they have. These can be used to build other data structures. Wherever
    possible, comparisons with other languages are drawn. Dynamic typing
    JavaScript is a loosely typed and dynamic language. Variables in
    JavaScript are not directly associated with any particular value type,
    and any variable can be assigned (and re-assigned) values of all types:
    let foo = 42; // foo is now a number foo = bar; // foo is now a string
    foo = true; // foo is now a boolean`,
    createdAt: new Date('2023-02-12'),
  },
  {
    id: 6,
    title: 'JavaScript data types and data structures',
    description: `Programming languages all have built-in data structures, but these often
    differ from one language to another. This article attempts to list the
    built-in data structures available in JavaScript and what properties
    they have. These can be used to build other data structures. Wherever
    possible, comparisons with other languages are drawn. Dynamic typing
    JavaScript is a loosely typed and dynamic language. Variables in
    JavaScript are not directly associated with any particular value type,
    and any variable can be assigned (and re-assigned) values of all types:
    let foo = 42; // foo is now a number foo = bar; // foo is now a string
    foo = true; // foo is now a boolean`,
    createdAt: new Date('2023-02-12'),
  },
]

export function Blog() {
  return (
    <BlogContainer>
      <Header />
      <Profile />

      <BlogContent>
        <SearchForm />

        <BlogPosts>
          {posts.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              title={post.title}
              description={post.description}
              createdAt={post.createdAt}
            />
          ))}
        </BlogPosts>
      </BlogContent>
    </BlogContainer>
  )
}
