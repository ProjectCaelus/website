import React from 'react';
import BackgroundImage from "gatsby-background-image";


import Layout from '../components/layout';
import SEO from '../components/seo';
import Subheading from "../components/subheading";


function AboutPage({ data }) {
    return (
        <Layout>
            <SEO title="About Us" />
            {/* <div>
                <h2 className="bg-secondary-light text-2xl font-bold inline-block my-8 p-3">Our team</h2>
            </div> */}

        <BackgroundImage
          fluid={data.file.childImageSharp.fluid}
          className="md:mt-0 -mt-16"
          style={{
            height: "55vh",
            width: "100%",
            backgroundSize: "contain",
          }}
        />
            <section className="flex flex-col bg-primary-dark justify-center">
                <Subheading heading={data.posts.nodes[2].title}>{data.posts.nodes[2].description}</Subheading>
            </section>

            <section className="flex flex-col bg-primary-dark justify-center">
                <Subheading heading={data.posts.nodes[3].title}>{data.posts.nodes[3].description}</Subheading>
            </section>


            <section className="flex flex-col bg-primary-dark justify-center">
                <Subheading heading="Subsystems"></Subheading>
            </section>

        </Layout>
    );
}

export const query = graphql`
  query {
    file(relativePath: { eq: "team.jpg" }) {
        childImageSharp {
            fluid {
            ...GatsbyImageSharpFluid_tracedSVG
            }
        }
    },
    posts: allSanityPost {
      nodes {
        title
        description
      }
    }
  }
`;

export default AboutPage;
