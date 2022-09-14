import React, { useState } from 'react'
import { nanoid } from '@reduxjs/toolkit';//引入随机生成的id
import { useDispatch } from 'react-redux';
import { postAdded, postAddedd } from '@/redux/reducers/posts/postsSlice'

export const AddPostForm = () => {
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const onTitleChanged = (e: { target: { value: React.SetStateAction<string> } }) => setTitle(e.target.value)
    const onContentChanged = (e: { target: { value: React.SetStateAction<string> } }) => setContent(e.target.value)

    //save
    const save = () => {
        if (title && content) {
            // redux 第一种写法
            // dispatch(postAdded({
            //     id: nanoid(),
            //     title,
            //     content
            // }))
            // redux 第一种写法
            dispatch(postAddedd(title, content))
            setTitle('')
            setContent('')
        } else {
            alert('请输入内容')
        }
    }
    return (
        <section>
            <h2>redux 增删改查</h2>
            <form>
                <label htmlFor="postTitle">帖子标题:</label>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={title}
                    onChange={onTitleChanged}
                />
                <label htmlFor="postContent">内容：</label>
                <textarea
                    id="postContent"
                    name="postContent"
                    value={content}
                    onChange={onContentChanged}
                />
                <button
                    type="button"
                    onClick={save}
                >保存帖子</button>
            </form>
        </section>
    )
}