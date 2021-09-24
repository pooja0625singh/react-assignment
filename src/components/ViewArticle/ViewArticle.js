import React from 'react'

function ViewArticle({article}){
    return(
    <div
    key={article.text}
    style={{ width: '20rem' , textAlign:'left'}}
    >
    <p>Author : {article.author}</p>
    <div>
      <p>Title : {article.title}</p>
      <p>
        Body : {article.text}
      </p>
    </div>
    </div>
    )
};

export default ViewArticle;