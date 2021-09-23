import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { graphql, StaticQuery, useStaticQuery } from "gatsby";
const Products = (props) => {
  const data = useStaticQuery(
    graphql`
      query ProductPrices {
        prices: allStripePrice {
          edges {
            node {
              id
              active
              currency
              unit_amount
              product {
                id
                name
                images
                description
              }
            }
          }
        }
      }
    `
  );
  console.log("stripe Data =", data);
  const stripePromise = loadStripe(
    "pk_test_51JagUeCE3jhPVdWsoteTE4pfDQIJM4JKBckIVik3rU9BVus94QFc0LIRvGrzBF8LdcEzzpmsKHYQWpELoikvuh9c00kUrZR3iV"
  );


  return (
    <main>
      Product List
      {data.prices.edges.map((node) => (
        <div key={node.node.id}>
          <div>Product Name: {node.node.product.name}</div>
          <div>Product Price: {node.node.unit_amount / 100}</div>
          <div>
            <img width="200px" src={node.node.product.images[0]} />
          </div>
          <button 
                class="snipcart-add-item"
                data-item-id="starry-night"
                data-item-price={node.node.unit_amount / 100}
                data-item-url="https://wonderful-bohr-80f5ce.netlify.app/Products"
                data-item-description={node.node.product.description}
                data-item-image={node.node.product.images[0]}
                data-item-name={node.node.product.name}
          >
            Checkout
          </button>
        </div>
      ))}
    </main>
  );
};

export default Products;
