import React from "react";
import BackgroundImage from "gatsby-background-image";

import Layout from "../components/layout";
import SEO from "../components/seo";
const BlockContent = require('@sanity/block-content-to-react')

function OutreachPage({ data }) {
  return (
    <Layout>
      <SEO title="Outreach" />
      {data.events.nodes.map((event) => (
        <section className="flex flex-col bg-primary-dark justify-center">
          <h1
            style={{
              fontSize: "50px",
              fontWeight: 300,
              textAlign: "center",
              padding: 10,
              marginTop: 50,
            }}
          >
            {event.title}
          </h1>
          <section class="flex container max-w-5xl mx-auto">
            <div
              class="flex-auto container md:w-1/2 justify-center"
              style={{ margin: 5 }}
            >
              <p className="" style={{ textAlign: "left" }}>
                {
              <BlockContent blocks={event.description} />}
              </p>
            </div>
            <div
              class="flex-auto container md:w-1/2 justify-center"
              style={{ margin: 5 }}
            >
              <BackgroundImage
                fluid={event.image.asset.fluid}
                className="md:mt-0 -mt-16"
                style={{
                  height: "55vh",
                  width: "100%",
                  backgroundSize: "contain",
                }}
              />
            </div>
          </section>
        </section>
      ))}
    </Layout>
  );
}

export const query = graphql`
  query {
    events: allSanityEvent {
      nodes {
        title
        description:_rawDescription
        image {
          asset {
            fluid {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;

export default OutreachPage;
