import React from 'react';
import Spinner from "./Spinner";

const Loading = ({loading}) => {
    return (
        <>{loading?(
            <div className="Box">
             <Spinner/>
            </div>
        ):null}
        </>
    );
};

export default Loading;
