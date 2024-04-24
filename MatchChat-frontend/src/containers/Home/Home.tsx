import "./Home.css";
import { useState } from "react";
import PostCard from "../../components/post/PostCard";
import Filter from "../../components/util/filter/Filter";
import Pagination from "../../components/util/pagination/Pagination";
import PostsContainer from "../../components/post/PostsContainer";

function Home(): JSX.Element {
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPge = 10;

    const filters = [
        { name: "Team", options: ["GENG", "T1", "DK"] },
        { name: "League", options: ["LCK", "MSI", "WORLDS"] },
        { name: "Season", options: ["SPRING", "SUMMER"] },
    ];

    const posts = new Array(14).fill(<PostCard />);
    const indexOfLastPost = currentPage * postsPerPge;
    const indexOfFirstPost = indexOfLastPost - postsPerPge;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    function handlePagination(pageNumber: number) {
        setCurrentPage(pageNumber);
    }

    return (
        <div className="home-container">
            <div className="home-container-posts-section">
                <Filter filters={filters} />
                <PostsContainer posts={currentPosts} />
                <Pagination
                    postsPerPage={postsPerPge}
                    length={posts.length}
                    currentPage={currentPage}
                    handlePageChange={handlePagination}
                />
            </div>
        </div>
    );
}

export default Home;
