import React from 'react'
import { graphql, Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'
import Seo from '../components/seo'

const About = ({data}) => {
    const { name, company } = data.site.siteMetadata.contact
    return (
        <Layout>
            <Seo title="About Us" />
            <h1>About Us</h1>
            <p>{`${company} was started by ${name} in 2026.`}</p>
            <p>{`At ${company} we make blogs!`}</p>
            <div Style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
                <StaticImage
                src="../images/gatsby-icon.png"
                width={300}
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt="A Gatsby blog"
                style={{ marginBottom: `1.45rem`}}
                />
            </div>
        </Layout>
    )
}

export default About

export const query = graphql`
    query {
        site(siteMetadata: {}) {
            siteMetadata {
                contact {
                    name
                    company
                    address
                }
            }
        }
    }
`