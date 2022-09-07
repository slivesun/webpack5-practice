import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { AddPostForm } from './reduxNumFrom'
import { postdelate, StateT } from '@/redux/reducers/posts/postsSlice'
export default function Counter() {
    const dispatch = useDispatch()
    const posts = useSelector((state: any) => state.posts)
    const renderedPosts = posts.map((post: StateT) => (
        <article className="post-excerpt" key={post.id}>
            <h3>{post.title}</h3>
            <p className="post-content">{post.content.substring(0, 100)}</p>
            <button
                onClick={() => {
                    dispatch(postdelate(post.id))
                }}
            >删除此数据</button>
        </article>
    ))
    return (
        <section className="posts-list">
            <AddPostForm />
            <h2>Posts</h2>
            {renderedPosts}
        </section>
    )
}