import React from "react";


const HomePage = (props) =>{

    return(
      <div className="card inline-block ml-4 my-4">
          <div className="card-body">
            <h3 className="text-secondary">Total number of users added</h3>
            <div className="text-warning">{props.userlist.length}</div>
          </div>
      </div>
    )
}

export default HomePage;