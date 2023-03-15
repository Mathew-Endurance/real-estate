import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import aboutImg from "../assets/hero-bcg.jpeg";

const AboutPage = () => {
  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="nice desk" />
        <article>
          <div className="title">
            <h2>our story</h2>
            <div className="underline"></div>
          </div>
          <p>
            Romax housing is a highly reputable company that has been delivering
            exceptional real estate development and management services in Lagos
            Metropolis for over 16 years. As one of the top Realty in the City,
            we have created a competitive edge for investors, buyers, and
            sellers by prioritizing their needs. We have built a strong team of
            professional architects, engineers, site managers, lawyers, and
            marketers who place a premium on customer satisfaction over quick
            results. With specialization in new construction, sales, property
            management, valuation, and interior building works, we are always
            available to ensure that clients achieve their goals. We understand
            the dynamics that inspire people to invest in a quality home and how
            personal each decision is. Therefore, our focus as a company is on
            creating real estate solutions that work best for our clients and
            add tangible value across property sectors. In recognition of our
            drive for exemplary work, we have delivered premium quality homes to
            hundreds of clients in need of class, comfort, and exclusivity.
            Through our deep understanding of the market, latest technology, and
            the changing trends, we guide clients to achieve the best results in
            this fast-transitioning industry.
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
