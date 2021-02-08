import React from 'react'
import './custom.css'
const ContentHeader = props => (
    <section className="content-header">
        <h1>{props.title}</h1>
        <small style={{marginTop: 15, marginLeft: 6}}>{props.small}</small>
    </section>
)

export default ContentHeader