import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { AddPostForm } from './reduxNumFrom'
import { postdelate, StateT } from '@/redux/reducers/posts/postsSlice';
import Eidt from './modal/edit';
import { Input } from 'antd';
export default function Counter() {
    let [isModal, setIsModal] = useState<boolean>(false)
    let [item, setItem] = useState<StateT>(null)
    let [ary, setAry] = useState<any[]>([])
    let [str, setStr] = useState<string>(null)
    const dispatch = useDispatch()
    const posts = useSelector((state: any) => state.posts)
    const renderAry = ary.map((post: StateT) => (
        <article className="post-excerpt" key={post.id}>
            <h3>{post.title}</h3>
            <p className="post-content">{post.content.substring(0, 100)}</p>
            <button
                onClick={() => {
                    dispatch(postdelate(post.id))
                }}
            >删除此数据</button>
            <button
                onClick={() => {
                    setItem(post)
                    setIsModal(true)
                }}
            >编辑</button>
        </article>
    ))
    const renderedPosts = posts.map((post: StateT) => (
        <article className="post-excerpt" key={post.id}>
            <h3>{post.title}</h3>
            <p className="post-content">{post.content.substring(0, 100)}</p>
            <button
                onClick={() => {
                    dispatch(postdelate(post.id))
                }}
            >删除此数据</button>
            <button
                onClick={() => {
                    setItem(post)
                    setIsModal(true)
                }}
            >编辑</button>
        </article>
    ))
    // 搜索
    const onSerch = (e: any) => {
        setStr(e.target.value)
        setAry(posts.filter((it: StateT) => it.title.includes(e.target.value) || it.content.includes(e.target.value)))
    }
    return (
        <section className="posts-list">
            <AddPostForm />
            搜索：<Input
                onChange={(e) => { onSerch(e) }}
            ></Input>
            <h2>Posts</h2>
            {str ? renderAry : renderedPosts}
            {
                isModal &&
                <Eidt
                    {...item}
                    cancel={() => {
                        setIsModal(false)
                    }}
                />
            }
        </section>
    )
}