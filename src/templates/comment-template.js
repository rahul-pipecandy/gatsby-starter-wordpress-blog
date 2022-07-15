import React from 'react'
import { graphql } from 'gatsby';

export default function CommentTemplate({ data }) {
    const {wpComment: {content, id}} = data;

  return (
    <>
        <h1>Content Data for {id}</h1>
        <div dangerouslySetInnerHTML={{__html: content}}></div>
    </>
  );
}

export const query = graphql`
    query CommentContent($id: String) {
        wpComment(id: {eq: $id}) {
            content
            id
        }
    }  
`;