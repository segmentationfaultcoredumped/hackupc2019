import React from'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

function Home() {
    const {loading, data: { getTags: tags } } = useQuery(FETCH_CHAT_QUERY);
/*    
    if(data){
        console.log(data);
    }
    */
    return (
        <div>
            Home Page
        </div>,
        <div class="ui feed">
            <div class="event">
                <div class="content">
                    <div class="summary">
                        <a class="user">
                            Elliot Fu
                        </a> added you as a friend
                        <div class="date">
                            1 Hour Ago
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const FETCH_CHAT_QUERY = gql`
{
    getTags {
        tags {
            name
        }
    }
}
`

export default Home;