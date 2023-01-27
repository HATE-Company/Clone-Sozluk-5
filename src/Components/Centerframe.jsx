import React from 'react';

import Comments from "./Comments/Comments";

const Centerframe = () => {

  return (
<>
    <div className="bg-secondary bg-opacity-25 text-center text-white p-3 rounded-3  ">
        {/* <h3 className='sectionTitle'>Trends for You</h3> */}

        <div>
          <Comments
            commentsUrl="http://localhost:3001/comments"
            currentUserId="1"
          />
        </div>

    </div>
    </>
  )
}

export default Centerframe