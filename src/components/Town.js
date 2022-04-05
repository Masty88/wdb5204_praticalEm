import React from 'react';

const Town = ({town, onClick}) => {
    return (
        <div  onClick={onClick} style={{display:"flex", justifyContent:"center", border:"solid 2px #1f1f1f", width:"80%",marginBottom:"5px", boxSizing:"border-box", padding:"20px" }}>
            <p style={{textAlign:"center"}}>{town}</p>
        </div>
    );
};

export default Town;
