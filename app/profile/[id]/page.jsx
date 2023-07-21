"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import Profile from "@components/Profile";

const UserProfile = ({ params }) => {
    const searchParams = useSearchParams();
    const userName = searchParams.get("name");

    const [userPosts, setUserPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
        const response = await fetch(`/api/users/${params?.id}/posts`);
        const data = await response.json();

        setUserPosts(data);
        };

        if (params?.id) fetchPosts();
    }, [params.id]);

    return (
        <Profile
        name={userName}
        desc={`selamat datang di halaman profil pribadi ${userName}. Cek prompt-prompt keren dari ${userName} dan dapetin inspirasi dari imajinasi kece mereka!`}
        data={userPosts}
        />

    );
};

export default UserProfile;