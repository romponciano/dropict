import React from 'react'

export default function Attribute({ header, body }) {
  return (
    <div className="card">
      <div className="card-header">
        <strong>{header}</strong>
      </div>
      <div className="card-body m-0 p-1">
        {body}
      </div>
    </div>
  );
}