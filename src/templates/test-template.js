import React from 'react'
import { graphql } from 'gatsby';

export default function TestTemplate({ data }) {
    const {wpPage: {content, title}} = data;

  return (
    <>
        <h1>Content Data for {title}</h1>
        <div dangerouslySetInnerHTML={{__html: content}}></div>
    </>
  );
}

export const query = graphql`
    query PageContent($id: String) {
        wpPage(id: {eq: $id}) {
            title,
            content
        }
    } 
`;