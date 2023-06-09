import React from "react";
import styled from "styled-components";
import { formatPrice } from "../utils/helpers";
import { Link } from "react-router-dom";
const ListView = ({ products }) => {
  return (
    <Wrapper>
      {products.map((product) => {
        const { id, image, name, price, description, category } = product;
        return (
          <article key={id}>
            <div className="container">
              <button className="sale_btn btn">{category}</button>
              <img src={image} alt={name} />
            </div>

            <div className="">
              <h4>{name}</h4>
              <h5 className="price">{formatPrice(price)}</h5>
              <p>{description.substring(0, 150)}...</p>
              <Link to={`/listing/${id}`} className="btn">
                Details
              </Link>
            </div>
          </article>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  row-gap: 3rem;
  .container {
    position: relative;
    background: var(--clr-black);
    width: 375px;
    height: 220px;

    border-radius: var(--radius);
  }
  .sale_btn {
    position: absolute;
  }

  img {
    width: 100%;
    display: block;
    width: 375px;
    height: 220px;
    object-fit: cover;
    border-radius: var(--radius);
    margin-bottom: 1rem;
  }
  /* img {
    width: 100%;
    display: block;
    object-fit: cover;
    border-radius: var(--radius);
    transition: var(--transition);
  } */
  h4 {
    margin-bottom: 0.5rem;
  }
  .price {
    color: var(--clr-primary-6);
    margin-bottom: 0.75rem;
  }
  p {
    max-width: 45em;
    margin-bottom: 1rem;
  }
  .btn {
    font-size: 0.5rem;
    padding: 0.25rem 0.5rem;
  }
  @media (min-width: 992px) {
    article {
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 2rem;
      align-items: center;
    }
  }
`;

export default ListView;
