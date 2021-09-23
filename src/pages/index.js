import * as React from "react";

// markup
const IndexPage = () => {
  return (
    <main>
      hello world
      <div style={{margin:"20px",padding:"20px"}}>
      <button class="snipcart-checkout">click here to checkout</button>
      <span class="snipcart-items-count"></span>
      <span class="snipcart-total-price"></span>
      </div>
      <button
        class="snipcart-add-item"
        data-item-id="starry-night"
        data-item-price="79.99"
        data-item-url="/"
        data-item-description="High-quality replica of The Starry Night by the Dutch post-impressionist painter Vincent van Gogh."
        data-item-image="https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1614252235316-8c857d38b5f4%3Fixid%3DMnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9ybWFsJTIwc2hvZXN8ZW58MHx8MHx8%26ixlib%3Drb-1.2.1%26w%3D1000%26q%3D80&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fformal-shoes&tbnid=7LiDxJ9SPcXM6M&vet=12ahUKEwjj38bp_5TzAhW1gHMKHdq6DyoQMygFegUIARDcAQ..i&docid=njMFecizu4PpeM&w=1000&h=563&q=formal%20shoes%20images&ved=2ahUKEwjj38bp_5TzAhW1gHMKHdq6DyoQMygFegUIARDcAQ"
        data-item-name="Formal Shoes"
        data-item-custom1-name="size"
        data-item-custom1-options="8|9[+5]|10[+10]"
      >
        Checkout
      </button>
    </main>
  );
};

export default IndexPage;
