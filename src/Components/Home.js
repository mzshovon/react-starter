import {useState} from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title : 'test', author : 'saiful', desscription: 'There will be ......', id : 1},
        {title : 'test', author : 'saiful', desscription: 'There will be ......', id : 2},
        {title : 'test', author : 'saiful', desscription: 'There will be ......', id : 3}
    ]);
    return ( 
        <div className="home">
            <BlogList 
                blogs = {blogs}
            />
        </div>
     );
}
 
export default Home;