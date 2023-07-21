'use client'

import { useState } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

import Profile from "@components/Profile"

const page = () => {
    const router = useRouter()

    const [posts, setPosts] = useState([])
    const { data: session } = useSession();

useEffect(() => {
    const fetchPosts = async () => {
        try {
        const response = await fetch(`/api/users/${session?.user.id}/posts`);
        const data = await response.json();
    
        setPosts(data);
        } catch (error) {
        console.log("Error fetching posts:", error);
        }

    }
    
        if( session?.user.id ) fetchPosts(posts)
    
    }, [])


    const handleEdit = (post) => {
        router.push(`/update-prompt?id=${post._id}`)
    }

    const handleDelete = async (post) => {
        const hasConfrimed = confirm('Are you sure you want to delete?')

        try {
            await fetch(`/api/prompt/${post._id.toString()}`, {
                method: 'DELETE',
            });

            const filteredPosts = posts.filter((p) => p._id !== post.id)

            setPosts(filteredPosts)
            router.push("/")
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Profile 
            name=""
            desc="Selamat datang di halaman profil pribadimu, bro/sis!"
            data={posts}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
        />
    )
    }

export default page