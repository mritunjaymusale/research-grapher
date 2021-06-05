import React from 'react'

const PaperDetails = ({paper}) => {
  return (
    <div>
      {paper.title && <p>{"Title : " + paper.title}</p>}
      {paper.authors && (
        <p>{"Authors : " + paper.authors.map((author) => author.name)}</p>
      )}
      {paper.year && <p>{"Year : " + paper.year}</p>}
      {paper.abstract && <p>{"Abstract : " + paper.abstract}</p>}
      {paper.venue && <p>{"Venue : " + paper.venue}</p>}
    </div>
  )
}

export default PaperDetails
